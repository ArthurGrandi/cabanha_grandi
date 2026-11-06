# Cabanha Grandi — Dorper em Foco

Design system v1.0 em português, com documento visual e especificação para ferramentas de código.

## Abrir

1. Extraia o ZIP inteiro, preservando as pastas.
2. Abra `index.html` no navegador para navegar pelas páginas, inspecionar componentes e testar estados.
3. Abra `Dorper-em-Foco-Design-System.pdf` para a versão estática de nove páginas com texto selecionável.
4. `landing.html` contém o protótipo responsivo de referência.

Todos os estilos, scripts, imagens e fontes estão incluídos; o documento não depende de CDN. Se o navegador corporativo bloquear arquivos locais, sirva a pasta com `python3 -m http.server 8000 --bind 127.0.0.1` e acesse o endereço local informado pelo comando.

## Usar com Codex ou outra ferramenta de código

Forneça a pasta inteira. Comece por `HANDOFF.md`, `tokens.json`, `components.schema.json` e `contracts.ts`. `components.css` e `landing.html` mostram a aplicação visual. `document.css`/`document.js` são apenas a interface do documento; não copiar essa navegação para o site comercial.

Prompt sugerido:

> Implemente a landing page Cabanha Grandi conforme HANDOFF.md. Use tokens.json como fonte visual, tokens.css e components.css como referência de estilo, components.schema.json para propriedades e estados e contracts.ts para tipos. Preserve a direção Dorper em Foco. Não invente contatos, animais ou informações comerciais. Mantenha o catálogo vazio até haver dados reais. Valide responsividade, teclado e contraste.

## Conteúdo

- 14 componentes com IDs `CG/*`, anatomia, props, defaults, variantes, estados e regras.
- 123 tokens tipados, com aliases; 97 variáveis CSS geradas.
- Exemplos HTML/CSS funcionais de botões, badges, card, estado vazio, navegação e página responsiva.
- Contratos TypeScript independentes de framework. São definições de API para implementar, não uma biblioteca React pronta.
- Fonte Cormorant Garamond nos títulos e DM Sans na interface, distribuídas localmente com licenças OFL.

## Manutenção

Edite `tokens.json` e execute `python3 generate-tokens.py`. Para conferir sincronização e contrastes sólidos: `python3 generate-tokens.py --check`.

Depois de mudar o manifesto ou a composição do documento, execute `python3 build-document.py` para atualizar `index.html` e `catalog-data.js`. Alterações em tokens/contratos não atualizam automaticamente o PDF; exporte-o novamente pelo botão Imprimir / PDF (A3 paisagem, gráficos de fundo ativados) ou por navegador automatizado.

## Escopo

Este é um documento HTML/CSS e um pacote técnico no estilo de organização de um arquivo de design. Não é um arquivo `.fig` nem uma modificação no Figma.

Logo em texto é uma assinatura provisória. `assets/hero-illustrative.png` é imagem gerada para estudo, não um registro de animal ou propriedade da família. `assets/design-reference.png` é a prancha conceitual anterior. Antes de publicar o site, substituir os ativos, revisar os textos e confirmar contatos e dados comerciais.

Consulte `VALIDACAO.md` para os checks executados e as limitações.
