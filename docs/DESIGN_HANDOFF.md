# Design handoff — Cabanha Grandi (identidade vermelha / V1.2)

> **Status:** protótipo institucional editável criado no Figma — versões desktop e mobile detalhadas. Ainda faltam fotografias e dados comerciais reais, identidade gráfica final e aprovação familiar.  
> **PRD:** [PRD V1.2](./PRD.md)  
> **Figma:** https://www.figma.com/design/PUt3WM30dQ1WASbWOJ6Nbw  
> **Repositório:** https://github.com/ArthurGrandi/cabanha_grandi  
> **Implementação em React:** ainda **não iniciada**, conforme etapa de design.

## 1. Decisão visual confirmada

**A identidade principal é VERMELHO E BRANCO.** A família explicitamente descartou o conceito verde-oliva/bege como referência principal. Todo refinamento de UI, design no Codex e posterior implementação devem seguir a direção vermelha.

Cores de trabalho (variáveis nativas já criadas no Figma; hex sujeitos a ajuste):

| Token | HEX |
|---|---|
| primary | `#A11724` |
| primaryDark | `#770D17` |
| paper | `#FFFFFF` |
| surface | `#FFF9F8` |
| soft | `#F6ECEA` |
| line | `#E7D0CF` |
| ink | `#281B1D` |
| muted | `#745B60` |
| accent | `#C69B76` |

Tipografia de trabalho: **Libre Baskerville** para títulos editoriais e **Inter** para corpo, rótulos e navegação. Direção estética: tradição familiar + agro moderno, visual sóbrio, **vermelho presente sem poluir**, branco como base dominante, cartões de borda delicada.

## 2. Arquivo Figma já construído

**Não criar um arquivo novo. Continuar o design no arquivo acima.**

Frames principais, ambos na primeira página:

- **Desktop**: ID `10:2`, 1440 px de largura, nome `PRINCIPAL · GRANDI · VERMELHO E BRANCO · DESKTOP 1440`
- **Mobile**: ID `11:2`, 390 px de largura, nome `PRINCIPAL · GRANDI · VERMELHO E BRANCO · MOBILE 390`

Dois protótipos mais antigos (verdes) foram **ocultados e arquivados** no canvas. NÃO usar esses frames como fonte de verdade.

As telas principais têm texto e frames nativos do Figma. Variáveis de cor foram criadas em `Cabanha Grandi | Brand`. Os blocos horizontais foram revisados para permitir altura dinâmica e evitar cortes.

### Mapa de seções (desktop + mobile)

1. Header / navegação e assinatura provisória
2. Hero: origem italiana, Nova Prata e criação de Dorper
3. Faixa de fatos da marca
4. Nossa história: Ênio e Anderson e o legado familiar
5. Linha de legado: Itália → imigração → Nova Prata → cabanha
6. Nossa propriedade / galeria
7. A raça Dorper / apresentação da criação
8. Compromissos: origem, informação clara e relacionamento
9. Pessoas e família / imagem da Juliana
10. Animais em destaque / catálogo **demonstrativo**
11. Jornada comercial: conhecer → contato → combinar detalhes
12. Perguntas frequentes
13. Contato e CTA WhatsApp
14. Rodapé

A landing page permanece **single-page**: sem checkout, sem login, sem backend ou páginas individuais de animais.

## 3. Conteúdo real já confirmado pelo usuário

- Nome da cabanha: **Cabanha Grandi**.
- Criação e venda de **ovinos**, principalmente associados à raça **Dorper** apresentada na marca.
- Localidade relacionada à cabanha: **Nova Prata, Rio Grande do Sul**.
- Raízes da família: **Torricella del Pizzo, Itália**.
- Antepassados imigraram ao Brasil e a família se estabeleceu em Nova Prata.
- A iniciativa de criação foi de **Ênio Grandi** e **Anderson Grandi**, avô e pai do usuário.
- A família tem uma tia veterinária formada pela UFRGS, identificada como Juliana no contexto. **Não atribuir responsabilidade técnica formal nem serviço veterinário à cabanha sem confirmação**.
- Não há informação validada sobre quantos animais existem, data de fundação, pedigree, desempenho, preço, transporte, visitas ou certificações.

## 4. Materiais fotográficos recebidos no chat

A família enviou:

1. **Anderson e Ênio** sorrindo juntos — preferir no bloco `Nossa história`.
2. **Anderson e Ênio** em um momento familiar preparando churrasco — foto secundária, não no hero comercial.
3. **Juliana** segurando um animal jovem — manter como foto familiar; **confirmar a espécie antes de identificar como cordeiro ou relacioná-la à raça Dorper**.
4. **Fotografia de referência da raça Dorper** e dois painéis de marca — **não presumir que animal ou instalações da composição sejam da cabanha**.

**Limitação atual:** as fotos enviadas não foram inseridas no Figma porque a transferência direta de arquivos para o serviço do Figma não ficou disponível nesta sessão. Os espaços correspondentes estão desenhados e rotulados como `FOTO PENDENTE`. A importação das fotos fica como tarefa de continuidade para o Codex/Figma; idealmente obter os originais em boa resolução e confirmação de direitos de uso.

Faltam também fotos **reais da propriedade e do plantel**, além do logo final extraído em arquivo separado (SVG/PNG).

## 5. Catálogo, CTA e honestidade dos dados

Os cards no protótipo são exemplos visuais — não representam animais disponíveis de verdade. Antes da publicação, coletar ao menos 3 animais/lotes reais ou mostrar estado vazio honesto:

- Identificação real e foto autorizada.
- Categoria, raça, sexo e informações adicionais somente se confirmadas.
- Status `disponivel`, `reservado` ou `vendido`, com rótulo textual.
- Link WhatsApp geral ou por item, após confirmação do número.
- Sem preços, endereços, condições de transporte ou perfis sociais fictícios.

## 6. Refinamentos de design pendentes

- Substituir a assinatura `CG CABANHA GRANDI` provisória pelo **logotipo oficial vermelho/branco**.
- Inserir fotografias reais, com recortes e tratamento de luz/cor sem alterar fatos, estruturas ou características do animal.
- Validar a hierarquia do hero e, se a foto Dorper for apenas imagem de raça, indicar claramente que é referência.
- Confirmar se a seção de pessoas deve identificar Juliana nominalmente e em qual papel institucional.
- Tornar os botões e cards **componentes Figma reutilizáveis** e definir seus estados para o handoff, se necessário.
- Testar cores exatas, alinhamentos, navegação por âncoras e comportamento do menu mobile.
- Revisar conteúdo com a família e remover marcações de protótipo de **forma responsável** somente após dados reais.
- Obter aprovação familiar antes de iniciar React.

## 7. Briefing pronto para Codex + Figma MCP

> Acesse o repositório `ArthurGrandi/cabanha_grandi` e leia `docs/PRD.md` e `docs/DESIGN_HANDOFF.md`.  
> Abra o arquivo Figma https://www.figma.com/design/PUt3WM30dQ1WASbWOJ6Nbw usando o MCP já conectado.  
> **NÃO volte à identidade verde.** A direção oficial é **vermelho e branco**.  
> Refine os frames principais **desktop `10:2` e mobile `11:2`**, que já contêm 14 seções cada. **Não recrie do zero.**  
> Priorize incorporar os arquivos de fotos reais, substituir o logotipo temporário, fortalecer o tratamento visual editorial e estruturar componentes reutilizáveis.  
> Mantenha o catálogo demonstrativo claramente marcado até a família fornecer dados reais. Não invente características técnicas, fotos de propriedade, certificados, preço ou disponibilidade comercial.  
> Valide o protótipo com a família e **somente depois** implemente a landing page em Vite + React + TypeScript + Tailwind.

---

**Registro da revisão:** V1.2 — adoção da paleta vermelha/branca, nova composição nativa desktop/mobile, narrativa ampliada, catálogo ilustrativo e descrição dos conteúdos pendentes.
