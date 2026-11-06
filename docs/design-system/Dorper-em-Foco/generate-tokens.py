#!/usr/bin/env python3
"""Gera tokens.css a partir de tokens.json; valida referências e contrates.
Uso: python3 generate-tokens.py [--check]
Sem dependências externas. Não altera o JSON de origem.
"""
from pathlib import Path
import json
import sys

ROOT = Path(__file__).resolve().parent
DATA = json.loads((ROOT / 'tokens.json').read_text())
EXTENSION = 'org.cabanhagrandi.css'

def walk(group, prefix=''):
    for name, value in group.items():
        if name.startswith('$'):
            continue
        path = f'{prefix}.{name}' if prefix else name
        if '$value' in value:
            yield path, value
        else:
            yield from walk(value, path)

TOKENS = dict(walk(DATA))

def resolve(value, ancestry=()):
    if isinstance(value, str) and value.startswith('{') and value.endswith('}'):
        path = value[1:-1]
        if path in ancestry:
            raise ValueError(f'Referência circular: {path}')
        return resolve(TOKENS[path]['$value'], (*ancestry, path))
    if isinstance(value, dict):
        return {key: resolve(item, ancestry) for key, item in value.items()}
    if isinstance(value, list):
        return [resolve(item, ancestry) for item in value]
    return value

def hex_color(value):
    assert value['colorSpace'] == 'srgb'
    assert len(value['components']) == 3
    assert all(0 <= x <= 1 for x in value['components'])
    assert value.get('alpha', 1) == 1
    return '#' + ''.join(f'{round(x * 255):02X}' for x in value['components'])

def css_value(kind, value):
    if kind == 'color':
        return hex_color(value)
    if kind in ('dimension', 'duration'):
        assert value['unit'] in ('px', 'ms')
        return f"{value['value']:g}{value['unit']}"
    if kind == 'fontFamily':
        generic = {'serif', 'sans-serif', 'system-ui', 'monospace'}
        return ', '.join(item if item in generic else json.dumps(item) for item in value)
    if kind in ('fontWeight', 'number'):
        return str(value)
    raise ValueError(f'Tipo CSS não suportado: {kind}')

variables = []
for path, token in TOKENS.items():
    value = resolve(token['$value'])
    assert token['$type'] in ('color', 'dimension', 'duration', 'fontFamily', 'fontWeight', 'number', 'typography')
    if token['$type'] == 'typography':
        assert set(value) == {'fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight'}
        assert value['lineHeight'] > 0
    variable = token.get('$extensions', {}).get(EXTENSION, {}).get('variable')
    if variable:
        variables.append((variable, css_value(token['$type'], value)))
assert len({name for name, _ in variables}) == len(variables)
css = ('/* Gerado de tokens.json por generate-tokens.py. Não editar à mão.\n'
       '   Breakpoints: usar 768px / 1024px literais em @media.\n'
       '   Valores de contraste medidos para pares sólidos, não para fotografias. */\n'
       ':root {\n' + ''.join(f'  {name}: {value};\n' for name, value in variables) + '}\n')
output = ROOT / 'tokens.css'
if '--check' in sys.argv:
    assert output.read_text() == css, 'tokens.css está diferente do JSON. Rode generate-tokens.py.'
else:
    output.write_text(css)

def luminance(value):
    rgb = resolve(TOKENS['color.semantic.' + value]['$value'])['components']
    linear = [c / 12.92 if c <= .04045 else ((c + .055) / 1.055) ** 2.4 for c in rgb]
    return sum(c * w for c, w in zip(linear, (.2126, .7152, .0722)))

def contrast(a, b):
    light, dark = sorted((luminance(a), luminance(b)), reverse=True)
    return (light + .05) / (dark + .05)

pairs = [('on-brand', 'brand'), ('on-brand', 'brand-hover'), ('text', 'bg'),
         ('muted', 'bg'), ('text', 'surface'), ('muted', 'surface'),
         ('available-text', 'available-bg'), ('reserved-text', 'reserved-bg'),
         ('sold-text', 'sold-bg')]
print(f'{len(TOKENS)} tokens; {len(variables)} variáveis CSS; referências resolvidas.')
for foreground, background in pairs:
    ratio = contrast(foreground, background)
    assert ratio >= 4.5, f'Contraste AA insuficiente: {foreground}/{background}'
    print(f'{foreground} / {background}: {ratio:.2f}:1 — AA texto normal')
print('Nota: borda decorativa e controles desabilitados não são indicadores de foco. Foco usa anel duplo branco/tinta; fotos exigem medição própria.')
