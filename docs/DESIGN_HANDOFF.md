# Design handoff — Cabanha Grandi V1

> Estado: **protótipo inicial editável no Figma**, aguardando revisão visual e inserção de fotos e marca definitivas.
>
> PRD: [docs/PRD.md](./PRD.md)  
> Figma: https://www.figma.com/design/PUt3WM30dQ1WASbWOJ6Nbw  
> Página: desktop **1440 px** e mobile **390 px**.  
> Não foi iniciada a implementação da landing page em React.

## Fonte de verdade

- O PRD define o **escopo funcional**; o Figma representa a **direção visual inicial**.
- Conceito adotado provisoriamente: verde-oliva, creme, detalhes terrosos e serifada nos títulos.
- Seções desenhadas: navegação, hero, história, propriedade, criação, animais em destaque, contato e rodapé.
- O catálogo da V1 tem dados **fictícios claramente identificados no layout** e deve receber animais reais antes da publicação.
- O Figma contém frames, textos e elementos de layout nativos/editáveis, não uma captura de tela integral.
- **O design ainda precisa de revisão e aprovação.** A implementação não deve começar automaticamente sem validação.

## Fotografias entregues na conversa

A família compartilhou 3 fotografias:

1. **Anderson e Ênio Grandi** preparando churrasco em um ambiente familiar.
2. **Anderson e Ênio Grandi** juntos, sorrindo — **imagem preferida** para a seção “Nossa história”.
3. **Juliana** com um cordeiro no colo — imagem sugerida para representar proximidade com os animais.

**Importante:** as três fotos foram compartilhadas na conversa e **não estão no GitHub ou no Figma**. É necessário importá-las com autorização para uso público. Não inventar uma imagem de fundadores ou associar Juliana à responsabilidade técnica sem validação. No protótipo, os locais destinados às fotos estão identificados com placeholders.

O material anterior também inclui uma fotografia de **Dorper** e painéis de identidade visual. **Não afirmar que uma imagem de referência da raça retrata um animal específico da cabanha.** Ainda faltam fotografias verificadas da propriedade e animais comercializáveis.

## Texto editorial resumido

- Origens familiares: Torricella del Pizzo, Itália, com história em Nova Prata/RS.
- Idealizadores da criação de ovinos: **Ênio Grandi e seu filho Anderson Grandi**.
- Raça principal indicada na marca: **Dorper**.
- Proposta do negócio: **criação e venda de ovinos**, sem restringir o comprador final.
- A seção “Nossa História” deve narrar legado familiar sem inventar antiguidade na atividade ovina.
- O slogan “Raízes que atravessam gerações” é **proposta de design**, não marca aprovada.

## Pendências do layout

- Importar fotografias familiares nos frames correspondentes (história e criação), ajustando cortes.
- Substituir fotos de propriedade e rebanho por imagens reais ou autorizadas, sem simular estruturas inexistentes.
- Substituir marca tipográfica temporária pelo logo oficial em arquivo editável/SVG.
- Confirmar as cores definitivas com a família.
- Cadastrar 3 a 6 animais/lotes reais e validar status, fotos e identificação.
- Configurar WhatsApp e Instagram oficiais.
- Revisar responsividade no Figma, contrastes, alinhamentos, componentes e consistência visual.

## Briefing pronto para continuar no aplicativo Codex

> Abra o repositório `ArthurGrandi/cabanha_grandi` e leia `docs/PRD.md` e `docs/DESIGN_HANDOFF.md`.
>
> Use o MCP remoto do Figma conectado ao Codex para abrir https://www.figma.com/design/PUt3WM30dQ1WASbWOJ6Nbw.
>
> Continue e refine **o protótipo já criado** — não crie outro arquivo sem necessidade. Trate as telas desktop e mobile como propostas iniciais a revisar.
>
> Priorize hierarquia visual, espaçamentos, alinhamento, tipografia, componentes e estados. Preserve seções e narrativa familiar definidas no PRD. A identidade principal sugerida é verde-oliva/creme/terrosa, com fotografias reais.
>
> Em seguida, incorpore as três fotos familiares **depois que os arquivos forem fornecidos ao ambiente do Codex**: Anderson + Ênio sorrindo em Nossa História; Juliana com cordeiro em Nossa Criação; outra imagem Anderson + Ênio como foto secundária, se o layout comportar.
>
> Não invente fotografias da propriedade, status comerciais nem animais; mantenha placeholders até que dados reais cheguem. Não confunda fotografia de referência da raça Dorper com animal do plantel.
>
> Primeiro entregue o protótipo revisado no Figma para aprovação. **Não inicie React/implementação ainda.**

## Fluxo proposto

1. Rever o arquivo Figma já iniciado.
2. Importar e ajustar material fotográfico real.
3. Aprovar visual desktop/mobile com a família.
4. Implementar Vite + React + TypeScript + Tailwind via Codex.
5. Testar navegação, catálogo, WhatsApp e responsividade.
6. Publicar somente após aprovação de dados e imagens.
