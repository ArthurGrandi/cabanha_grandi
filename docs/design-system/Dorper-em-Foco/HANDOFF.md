# Cabanha Grandi — Dorper em Foco

**Design system v1.0 • documento para desenvolvimento • pt-BR**

Este pacote organiza a direção 04 como uma biblioteca de componentes, estados e contratos de dados. `index.html` é o documento visual navegável, com elementos HTML/CSS reais. Não é um arquivo nativo do Figma e não foi publicado no Figma. O PDF, quando incluído, é a versão estática para leitura; HTML, CSS, JSON e TypeScript compõem a entrega para ferramentas de código.

## Como usar com Codex ou outra ferramenta

1. Abrir `index.html` para entender a linguagem visual e a anatomia dos componentes.
2. Ler este documento antes de implementar regras de conteúdo e interação.
3. Usar `tokens.json` como catálogo de valores e `tokens.css` como aplicação em CSS.
4. Consultar `components.schema.json` para IDs, propriedades, variantes, estados, medidas e regras dos 14 componentes. Apesar da extensão do nome, o conteúdo é um **manifesto**, não um JSON Schema formal de validação.
5. Usar `contracts.ts` para modelar dados e propriedades. É independente de framework; não exporta componentes React prontos.
6. Adaptar os padrões de `components.css` aos componentes da aplicação. `document.css`, `document.js` e `catalog-data.js` pertencem ao documento/inspector, não à interface comercial final.
7. Validar a aplicação em desktop, tablet e mobile com os critérios abaixo. `landing.html` é uma composição demonstrativa, não prova de disponibilidade comercial.

**Precedência:** este handoff define regras de negócio e comportamento; `contracts.ts` define os tipos; `components.schema.json` cataloga as propriedades; `tokens.json` e `tokens.css` definem os valores visuais. As imagens conceituais orientam composição e recorte, sem substituir essas regras. Havendo conflito, corrigir o artefato divergente antes de implementar, em vez de interpretar texto gerado em uma prancha como fato.

Prompt sugerido para iniciar código:

> Implemente a landing page Cabanha Grandi usando HANDOFF.md, contracts.ts, components.schema.json, tokens.json, tokens.css e components.css deste pacote. Reproduza Dorper em Foco com componentes semânticos e responsivos. Separe dados, tokens e UI. Comece com catálogo vazio e contato não confirmado. Não invente número de WhatsApp, logo final, propriedade, animais ou certificações. Consulte index.html como referência visual. Teste menu por teclado, estados dos cards, fallback de contato e larguras 360/390/768/1024/1440.

## 1. Direção selecionada

Vinho profundo, tipografia editorial, fotografia de Dorper em destaque e base branca nas áreas de leitura. Bordas discretas, raios de 4px e ausência de sombras decorativas. Nenhuma mudança para a identidade verde/oliva.

| Papel | Valor |
|---|---|
| Marca / primário | `#770D17` |
| Primário hover | `#590911` |
| Fundo | `#FFFFFF` |
| Texto | `#191717` |
| Texto auxiliar | `#65565A` |
| Borda | `#E7D0CF` |
| Títulos | Cormorant Garamond, peso 600 |
| Texto / UI | DM Sans, pesos 400 e 600 |
| Raio padrão | 4px |

As fontes locais do pacote incluem seus arquivos de licença. Preservar as licenças na redistribuição; carregar somente os pesos utilizados, com `font-display: swap`. Fonte de fallback: Georgia nos títulos e system-ui no corpo.

### Tipografia

| Estilo | Desktop | Mobile |
|---|---|---|
| H1 | 80/84px | 44/48px |
| H2 | 48/54px | 34/40px |
| H3 | 32/38px | 26/32px |
| Corpo | 18/28px | 16/26px |
| Botão | 16/24px, 600 | 16/24px, 600 |
| Rótulo | 14/20px | 14/20px |
| Auxiliar / badge | 12/18px, mínimo | 12/18px, mínimo |

Valores separados por `/` representam tamanho/altura de linha. H1 com `clamp()` entre endpoints. Não forçar quebras específicas de desktop no mobile nem transformar texto em imagem.

## 2. Layout e Auto Layout equivalente

| Propriedade | Desktop ≥1024px | Tablet 768–1023px | Mobile <768px |
|---|---|---|---|
| Referência | 1440px | 768px | 390px; validar 360px |
| Container | min(1200px, largura − 64px) | largura − 48px | largura − 40px |
| Colunas | 12 | 8 | 4 |
| Gutter | 24px | 24px | 16px |
| Seção, padding vertical | 96px | 72px | 56px |
| Menu | horizontal | modal | modal |

Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Em termos de Figma: container Fill, altura de texto Hug, seção Hug; imagens Fill com proporção definida; botão Hug na horizontal e Fill em grupos de CTA mobile. Não fixar altura de seções de texto. Hero desktop tem mínimo de 640px, não altura máxima. Parágrafos até 60ch. Componentes não podem produzir scroll horizontal na página.

## 3. Biblioteca padronizada

Os IDs são estáveis e podem ser usados em prompts, testes visuais e mapeamento para componentes de código. Propriedades completas estão no manifesto e no TypeScript.

| ID | Classe base | Variantes principais | Padrão |
|---|---|---|---|
| CG/Button | `cg-button` | primary, secondary, inverse; md, lg | primary / md |
| CG/IconButton | `cg-icon-button` | plain, outline | outline |
| CG/StatusBadge | `cg-badge` | disponivel, reservado, vendido | status obrigatório |
| CG/AnimalCard | `cg-card` | production, demonstration; três status | mode obrigatório |
| CG/EmptyState | `cg-empty` | mensagem, mensagem + ação | sem ação |
| CG/SectionHeading | `cg-section-heading` | left/center, default/inverse | left / default / h2 |
| CG/Brand | `cg-brand` | fundo claro/escuro; desktop/mobile | fundo claro / desktop |
| CG/Header | `cg-header` | desktop/mobile; static/sticky | static |
| CG/MobileMenu | `cg-menu` | modal aberto/fechado | controlado |
| CG/Hero | `cg-hero` | cinematic | cinematic |
| CG/Gallery | `cg-gallery` | grid | grid |
| CG/StorySection | `cg-story` | mídia esquerda/direita; sem mídia | mídia direita |
| CG/ContactBand | `cg-contact` | contato confirmado/pendente | vinho |
| CG/Footer | `cg-footer` | três colunas / empilhado | responsivo |

### Ações e estados

`Action.kind="link"` exige `href` válido. Renderizar `<a>`; a variante visual não muda a semântica. `Action.kind="button"` exige comando, renderiza `<button type="button">` e pode ter `disabled`. Não inventar botão/link desabilitado para esconder destino ausente; omitir o link.

Button: 48px de altura mínima; lg 56px; padding horizontal 24px; gap 8px; raio 4px; tipografia 16/24px 600. Hover muda para a cor indicada no token. Pressed pode deslocar 1px, sem mudar layout. Focus-visible usa anel duplo branco + tinta, 2px e offset 3px; precisa funcionar em branco, vinho e fotografia. Disabled: fundo `#E5E0E1`, texto `#6A6063`, sem hover nem execução. Transição 160ms, respeitando redução de movimento.

IconButton: 48×48px, ícone 24px, nome acessível obrigatório. Tooltip não substitui `aria-label`. Ícones decorativos dentro de botões devem ficar fora da árvore acessível para evitar anúncio duplicado.

Badge: não é botão. Um estado por animal; os três estados exibidos juntos no documento são uma legenda. Disponível: `#E8F4EA/#245B32`; reservado: `#FFF3DA/#775000`; vendido: `#FBE8E8/#8A2430`. Primeiro valor é fundo, segundo texto. Verde só em estado semântico pontual.

## 4. Composição da landing page

1. **Header:** marca, âncoras História/Propriedade/Criação/Animais/Contato, contato confirmado e gatilho mobile. Altura mínima 96px desktop / 80px mobile. Marca em caixa máxima 176×64px / 136×48px, sem distorção.
2. **Hero:** fotografia em destaque, overlay vinho, eyebrow, um h1 “A força da nossa origem.”, apoio e CTAs “Conheça nossos animais” → `#animais` e “Nossa história” → `#historia`. Texto até seis colunas. Ajustar overlay e recorte após receber foto final. Sem imagem, fundo vinho sólido.
3. **Nossa história:** bloco editorial 6+6 colunas, gap 48px; mobile texto primeiro, gap 24px. Narrativa proposta: raízes em Torricella del Pizzo, trajetória em Nova Prata e iniciativa de Ênio e Anderson Grandi. Não inventar datas, retratos ou tradição comprovada na criação.
4. **Nossa propriedade:** 2–5 fotos reais; grade 3 colunas desktop / 2 tablet / 1 mobile; proporção 4:3 e gap 24px desktop / 16px mobile. Se houver duas fotos, duas colunas desktop. Sem carrossel na base. Fotografias demonstrativas são identificadas como ilustrativas.
5. **Nossa criação:** reutiliza StorySection; a variante com mídia à esquerda pode alternar a composição no desktop. Apresentação dos ovinos Dorper sem selos ou alegações não verificadas.
6. **Animais em destaque:** começa em EmptyState. Com dados reais, até seis cards ativos na ordem do arquivo. Grade 3/2/1 colunas, gap 24px. Não há filtros, paginação ou páginas individuais.
7. **Contato:** fundo vinho, título e apoio em oito colunas, ação em quatro; mobile empilhado. CTA inverso para WhatsApp somente com número confirmado.
8. **Footer:** marca, âncoras, localidade e ano corrente. Instagram/e-mail só quando aprovados. Nada de domínio, endereço ou perfil social presumido.

## 5. Menu mobile

O Header alterna para gatilho abaixo de 1024px. Usar diálogo modal com fundo branco, padding 20px e altura dinâmica de viewport. Links com mínimo de 48px e gap 8px. Gatilho tem `aria-expanded` e `aria-controls`; diálogo tem nome “Navegação principal”.

Ao abrir: mover foco para primeiro controle, conter foco, tornar fundo inerte e bloquear seu scroll. Ao fechar por botão ou Escape: restaurar foco ao gatilho. Ao selecionar âncora: fechar e permitir navegação ao conteúdo. Ao cruzar breakpoint desktop: fechar modal e restaurar scroll. Se o header for sticky, compensar âncoras com `scroll-margin-top` 112px desktop / 96px mobile.

## 6. Contrato de catálogo e contato

Dados reais mínimos: id, código, categoria, imagem aprovada com alt e dimensões, status, publicado. Nome, raça, sexo, nascimento e descrição são opcionais. Renderizar apenas itens com `publicado=true` e campos obrigatórios válidos. Lista inicial é `[]`. Ausência de cards significa ausência de listagens publicadas, não ausência de animais na cabanha.

| Status | Rótulo | Ação com contato confirmado |
|---|---|---|
| disponivel | Disponível | Consultar este animal; mensagem contém código exato |
| reservado | Reservado | Consultar outros animais; mensagem geral |
| vendido | Vendido | Consultar outros animais; mensagem geral |

CTA de venda nunca aparece para item reservado ou vendido. Se contato não confirmado, omitir links de contato. `mode="demonstration"` não aceita inventário de produção; rótulo “Demonstração” é obrigatório. Nunca alimentar lista pública com exemplos do documento.

WhatsApp confirmado: número internacional apenas com dígitos, incluindo DDI, e validação em runtime; mensagem via `encodeURIComponent`. Mensagem geral: “Olá! Conheci a Cabanha Grandi pelo site e gostaria de saber mais sobre os animais.” Para item disponível: incluir identificação exata do card. Número desconhecido não vira `wa.me/undefined`, zero ou número inventado. No protótipo: “Contato em confirmação”.

## 7. Ativos, conteúdo e imagens

As fotografias geradas no estudo são conceituais, não documentação da propriedade ou prova de animais disponíveis. Mantê-las com “Imagem ilustrativa” na demonstração. Produção exige fotos originais/autorizadas e logo aprovado em arquivo separado. Não extrair a marca da prancha para tratá-la como logo final.

`ImageAsset` distingue approved, illustrative, missing e error. Imagem quebrada usa fallback neutro “Imagem indisponível”; não substituir por foto de outro animal. Reservar dimensão/proporção antes do carregamento. Priorizar hero; imagens abaixo da primeira dobra podem usar lazy. Dar alt descritivo, não repetir legenda ou rótulo comercial sem necessidade.

Claims sobre estrutura, seleção, manejo, bem-estar, certificações, desempenho e responsabilidade veterinária só entram depois de confirmação. Texto pequeno gerado em imagens não aprova essas afirmações. Retratos de pessoas reais precisam de arquivos e autorização. Logo textual no documento, quando presente, é referência de posicionamento.

## 8. Mapeamento para código

```text
src/components/ Button, IconButton, StatusBadge, AnimalCard, EmptyState,
                SectionHeading, Brand, Header, MobileMenu, Gallery, Footer
src/sections/   Hero, StorySection, FeaturedAnimals, ContactBand
src/data/       siteContent.ts, animals.ts
src/styles/     tokens.css, components.css, global.css
src/lib/        whatsapp.ts, validateContent.ts
public/images/ arquivos autorizados
```

Usar dados tipados e componentes pequenos. Nenhum segredo no frontend, nenhuma dependência de API ou banco de dados para esta V1. O documento não exige um framework específico; o PRD sugere Vite + React + TypeScript, com estilos derivados dos tokens. A interface comercial não precisa de inspector, abas de documentação ou seletor de tema.

## 9. Cobertura dos exemplos entregues

O HTML/CSS demonstra os componentes e os estados visuais principais. `contracts.ts` e o manifesto também descrevem extensões para a implementação final. Eles não são uma API executável. As seguintes propriedades exigem adaptação no código da aplicação: Brand com arquivo aprovado e versão para fundo escuro; Header sticky; SectionHeading center/inverse; StorySection com mídia à esquerda; Gallery com ajuste específico para duas imagens; renderização e validação de catálogo de produção; fallback de erro de imagem; contato confirmado e geração da URL WhatsApp; aplicação de optional social channels. O protótipo usa catálogo vazio e contato não confirmado. Não presumir que uma prop declarada é automaticamente interpretada pelo HTML estático.

## 10. Aceite de implementação

- Testar 360, 390, 768, 1024 e 1440px: sem overflow, conteúdo cortado ou alvo de toque menor que 48px nos controles principais.
- Um h1; títulos h2 por seção e h3 nos cards. `lang="pt-BR"` e landmarks semânticos.
- Testar teclado: abrir/fechar menu, Escape, foco contido, restauração do foco, âncoras e CTAs.
- Medir contraste: 4.5:1 texto normal, 3:1 texto grande e limites relevantes de controles. Avaliar sobre as fotografias finais, incluindo overlay.
- Testar catálogo vazio, cada status, contato ausente, imagem quebrada e conteúdo opcional omitido; nenhum “undefined”.
- Testar URL e mensagem de WhatsApp em dados de teste isolados, sem abrir conversas reais durante teste automatizado.
- Conferir redução de movimento, foco visível e ausência de informação comunicada somente por cor.
- Confirmar ativos e conteúdo com a família; compilar e executar smoke do fluxo principal após implementação.

Uma visualização no documento não prova a implementação de todos esses comportamentos no site futuro. Os relatórios de validação do pacote, quando incluídos, se referem aos arquivos demonstrativos entregues.
