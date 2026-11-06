# Validação da entrega

Executada no ambiente atual, em 6 de novembro de 2026.

## Concluído

- `generate-tokens.py --check`: 123 tokens, 97 variáveis CSS, referências resolvidas e CSS sincronizado.
- Contrastes de nove pares sólidos: todos ≥ 4.5:1 para texto normal. Branco/vinho: 11.32:1. A análise não é uma auditoria completa WCAG.
- `tsc --noEmit --strict --lib es2022 contracts.ts`, TypeScript 5.9.3: concluído sem erros.
- Chromium: todos os 14 inspetores abrem e exibem contratos; nenhum erro JavaScript observado.
- Card demonstrativo: alternância para Vendido mantém o rótulo e altera a ação para “Consultar outros animais”.
- Menu: abre, fecha por Escape, devolve foco ao acionador e fecha ao mudar para largura desktop.
- Documento e protótipo: sem overflow horizontal em 360, 390, 768, 1024 e 1440px.
- PDF: nove páginas com texto selecionável; quebras ajustadas para preservar grupos de componentes. Inspeção visual da capa, ações e composição de seções.
- Fontes de `@fontsource/cormorant-garamond` e `@fontsource/dm-sans`, versão 5.3.0: pacotes obtidos do registro npm com TLS e verificação de integridade do pacote. Licenças incluídas.

## Limitações

- Não testado no Safari/iOS ou Firefox. Sem pontuação Lighthouse atribuída.
- Contraste sobre fotografia depende do recorte e da imagem final. O protótipo inclui overlay; a foto final ainda precisa de medição.
- Os contratos descrevem uma API para implementação. Os exemplos HTML não implementam toda combinação possível de props, nem validação de catálogo de produção ou integração WhatsApp.
- Contato oficial, logo original, fotografias reais e dados dos animais pendentes; nenhum número fictício foi configurado.
- Nenhuma criação/edição de arquivo nativo do Figma ocorreu.
