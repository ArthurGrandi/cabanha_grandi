# PRD — Cabanha Grandi | Landing Page V1.1

> **Status:** Especificação inicial para prototipação e desenvolvimento  
> **Versão:** 1.1 | **Data:** 03/11/2026  
> **Projeto:** Cabanha Grandi Dorper — Nova Prata/RS *(localidade apresentada na identidade visual; confirmar)*  
> **Repositório:** https://github.com/ArthurGrandi/cabanha_grandi  
> **Ferramentas:** Codex (geração de protótipo e implementação), Figma via MCP remoto (design editável), GitHub (versionamento)

## 1. Resumo executivo

A Cabanha Grandi é um empreendimento familiar em planejamento/estruturação, idealizado por **Ênio Grandi e seu filho Anderson Grandi**, voltado à **criação e comercialização de ovinos**, com a raça **Dorper** como referência da identidade visual enviada. Sua narrativa conecta as raízes da família Grandi, de origem italiana em **Torricella del Pizzo**, à história familiar em **Nova Prata/RS**. A destinação comercial dos animais pode variar conforme o comprador (outros criadores, frigoríficos, compradores finais etc.); **o site não deve pressupor um modelo exclusivo de venda**.

A **V1 será uma única landing page institucional e comercial**, com apresentação da marca, da família, da propriedade, da criação, uma seleção enxuta de animais/lotes em destaque e meios de contato. O principal caminho de conversão é o **WhatsApp**. A negociação, a disponibilidade definitiva, a logística e a documentação serão tratadas fora do site.

**Princípio de produto:** começar simples, com aparência profissional e informações verdadeiras, sem e-commerce, sem contas de usuários, sem backend e sem múltiplas páginas de animais.

## 2. Contexto e problema

- A família precisa estabelecer uma presença digital confiável e apresentar sua atividade.
- Interessados devem conseguir conhecer a cabanha e visualizar alguns animais sem depender de mensagens prévias.
- A gestão do conteúdo deve ser simples e barata na V1.
- Ainda faltam dados reais para publicação: história, fotos, inventário comercial, contato oficial e escolha final da identidade.

**Hipótese:** uma landing page responsiva com fotografias de qualidade, narrativa da família e catálogo de destaques pode apoiar a apresentação comercial e gerar contatos qualificados.

## 3. Objetivos

### 3.1 Objetivo principal

**Apresentar a Cabanha Grandi e facilitar contatos comerciais sobre os animais criados pela família.**

### 3.2 Objetivos específicos

1. Estabelecer credibilidade e identidade de marca.
2. Contar a história da família Grandi (raízes italianas, gerações em Nova Prata e iniciativa de Ênio e Anderson) e mostrar a propriedade.
3. Apresentar a criação de ovinos Dorper sem prometer resultados ou certificações não comprovados.
4. Exibir inicialmente **3 a 6 cards de animais ou lotes**, quando existirem dados reais.
5. Permitir contato rápido via WhatsApp, inclusive com contexto do animal/lote de interesse.
6. Facilitar descoberta e navegação em dispositivos móveis.

### 3.3 Indicadores sugeridos (a medir após publicação)

- Cliques nos botões de WhatsApp (geral e associados aos animais).
- Cliques no Instagram.
- Visualizações e navegação até a seção do catálogo.
- Contatos comerciais recebidos e identificados pela família (controle manual inicial).

Não há metas numéricas definidas nesta fase. Qualquer ferramenta de analytics é **opcional** e requer avaliação de privacidade.

## 4. Público-alvo

- **Produtores/criadores:** interessados em ovinos para seus plantéis.
- **Compradores comerciais:** pessoas ou empresas interessadas em adquirir animais/lotes.
- **Público geral:** pessoas que desejam conhecer a propriedade ou entrar em contato.

A comunicação deve ser clara, acolhedora e profissional; não segmentar exclusivamente genética, frigoríficos ou carne até a família definir suas ofertas.

## 5. Escopo

### 5.1 Incluído na V1 — obrigatório

- Uma única página pública, em português brasileiro.
- Cabeçalho com logotipo, navegação por âncoras e CTA de contato.
- Hero com fotografia, chamada institucional e CTA para catálogo.
- Seção "Nossa história".
- Seção "Nossa propriedade", com fotografias.
- Seção "Nossa criação", com apresentação dos ovinos/Dorper.
- Seção "Animais em destaque" com cards e status.
- Seção "Contato", WhatsApp e redes sociais confirmadas.
- Rodapé com localização geral e direitos autorais.
- Layout responsivo, acessibilidade básica, SEO e otimização de imagens.
- Conteúdo editável em **arquivo de dados local** e/ou componentes, sem painel administrativo.

### 5.2 Opcional, somente se houver conteúdo e tempo

- Pequena galeria de fotos ampliáveis.
- Indicadores reais e verificáveis da cabanha (ex.: tempo de atuação), caso existam.
- Botão flutuante discreto de WhatsApp.
- Perguntas frequentes sobre contato/visitas, se a família fornecer respostas oficiais.

### 5.3 Fora de escopo — V1

- Checkout, carrinho, pagamento, reservas automatizadas ou preço dinâmico.
- Login, CRM, painel administrativo, CMS ou backend próprio.
- Páginas individuais para cada animal ou roteamento multipágina.
- Rastreamento de crescimento, peso, saúde e reprodução dos animais.
- Emissão de notas, documentação de trânsito animal ou gestão de transporte.
- Leilões, sêmen, embriões, derivados, venda de carne processada.
- Anúncios pagos, blog e área de notícias.

Não prometer disponibilidade de serviços não confirmados pela família.

## 6. Arquitetura da página e conteúdo

**Navegação sugerida:** Início | Nossa história | Propriedade | Criação | Animais | Contato.

### 6.1 Cabeçalho (header)

- Logotipo oficial da Cabanha Grandi; versão adequada para fundo claro e/ou escuro.
- Menu com scroll suave até as seções.
- Botão "Fale conosco" que abre contato geral via WhatsApp.
- Em telas pequenas: menu compacto acessível com botão identificado.
- Cabeçalho fixo/sticky **somente se** não prejudicar a leitura em dispositivos pequenos.

### 6.2 Hero — primeira dobra

- Foto real da propriedade ou dos ovinos, com enquadramento que permita leitura do texto.
- Marca e identificação geográfica "Nova Prata · RS" após confirmação.
- Título provisório: **"Tradição que produz futuro."** *(slogan visto no material de referência; aprovação pendente)*. Alternativa narrativa: **"Nossas raízes, nosso legado, nosso futuro."** *(proposta; não aprovado)*.
- Subtítulo objetivo sobre criação e comercialização de ovinos.
- CTA primário: **"Conheça nossos animais"** → #animais.
- CTA secundário opcional: **"Nossa história"** → #historia.
- Evitar claims como "melhor genética", "certificada" ou "líder" sem comprovação.

### 6.3 Nossa história

**Objetivo:** criar vínculo emocional e estabelecer o legado familiar como diferencial de marca, sem inventar tradição prévia na ovinocultura.

#### Fatos narrados pela família (base para conteúdo; revisar nomes e detalhes antes de publicar)

- Raízes familiares em **Torricella del Pizzo, Lombardia, Itália**; antepassados imigraram ao Brasil em busca de terras, oportunidades e uma nova vida.
- A história da família passou a se desenvolver em **Nova Prata/RS**.
- **Ênio Grandi** cresceu em uma família numerosa: segundo o relato, teve **11 irmãos**; essa referência pode inspirar o conceito de “família grande”, mas não precisa aparecer no texto público.
- O filho de Ênio, **Anderson Grandi**, representa a continuidade de uma história familiar ligada ao empreendedorismo.
- Há conhecimento profissional na família relacionado à medicina veterinária: uma tia do proponente é formada pela **UFRGS**, segundo o relato. **Não associar automaticamente essa profissional à responsabilidade técnica ou ao manejo da cabanha.**
- **Ênio Grandi e Anderson Grandi** tomaram a iniciativa de começar a criação de ovinos Dorper.
- Há descendentes de outras gerações (incluindo os filhos de Anderson e o primo Francisco), mas **não publicar dados ou fotos individuais sem autorização**.
- Data exata da fundação, propriedade da terra, experiências de criação anteriores e participação operacional de cada familiar **a confirmar**.

#### Texto institucional proposto — versão principal (requer aprovação familiar)

> **Nossa história**
>
> A história da Cabanha Grandi começa muito antes dos primeiros animais da nossa criação.
>
> Nossas raízes remontam a Torricella del Pizzo, na Itália. De lá, nossos antepassados partiram em busca de oportunidades, terras e da possibilidade de construir uma nova vida no Brasil. Foi em Nova Prata, no Rio Grande do Sul, que a família Grandi encontrou um lugar para criar raízes e construir sua trajetória ao longo das gerações.
>
> O trabalho, a união e o espírito empreendedor atravessaram essa história. E foi da vontade de dar continuidade a esse legado que nasceu a Cabanha Grandi: uma iniciativa de **Ênio Grandi e de seu filho, Anderson Grandi**, dedicada à criação de ovinos da raça Dorper.
>
> Hoje, a cabanha representa um novo capítulo da nossa família — um projeto que valoriza suas origens enquanto constrói, com dedicação e responsabilidade, o seu futuro no campo.

**Microtexto opcional de destaque:** “Das raízes italianas ao campo gaúcho. Uma história de família que segue crescendo.”

**Assinatura proposta (não aprovada):** “Cabanha Grandi — Nossas raízes, nosso legado, nosso futuro.”

#### Direção de conteúdo e layout

- Foto atual de Ênio e Anderson (se houver e se autorizada), acompanhada de registros da propriedade.
- Opcional: foto histórica familiar e pequeno eixo cronológico **sem datas inventadas**: “Origens italianas → Nova Prata → Ênio e Anderson → Cabanha Grandi”.
- Um título de caráter afetivo; evitar transformar a seção em genealogia extensa.
- Conteúdo disponível para desktop e mobile, com boa leitura e linguagem acolhedora.
- Usar apenas fotografias originais e autorizadas; não simular retratos históricos reais com IA.

### 6.4 Nossa propriedade

- Galeria de 2 a 5 fotos reais com legendas curtas.
- Texto breve sobre o local, a estrutura e a rotina, somente com dados validados.
- Localização geral (cidade/estado); endereço completo e mapa são opcionais, sujeitos à decisão da família.

### 6.5 Nossa criação

- Introdução à criação de ovinos Dorper e ao manejo adotado **apenas após confirmação factual**.
- Foto de rebanho ou animal em destaque.
- Diferenciais somente se demonstráveis: critérios de seleção, cuidado, alimentação, acompanhamento etc.
- Não apresentar reprodução/genética como a única atividade comercial sem definição do negócio.

### 6.6 Animais em destaque (catálogo simplificado)

- Grade com **3 a 6 cards** de animais ou lotes reais.
- Cada card contém foto, identificação, tipo/categoria e **status**.
- Metadados opcionais, quando confirmados: raça, sexo, data de nascimento/idade, observações.
- CTA para WhatsApp vinculado ao item quando disponível.
- Sem preço público na versão padrão: mostrar **"Consulte condições"** ou apenas CTA, até decisão da família.
- Se não houver animais reais cadastrados, exibir texto honesto como **"Entre em contato para consultar os animais disponíveis"**; **não publicar animais fictícios com status de venda**.
- Não criar páginas individuais de animais nesta versão.

### 6.7 Contato e rodapé

- Chamada final: "Quer saber mais sobre nossos animais?"
- Botão principal: **"Conversar no WhatsApp"**.
- Link Instagram apenas quando perfil e endereço forem confirmados.
- Cidade/UF e eventual e-mail, se fornecido.
- Rodapé com marca, links âncora e ano corrente.
- O domínio exibido nas peças de identidade visual e o @ de Instagram são **referências não verificadas**; não publicar como links oficiais sem confirmação.

## 7. Requisitos funcionais

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF-01 | Página única com seções institucionais | Alta | Toda a navegação ocorre na rota inicial, com âncoras funcionais |
| RF-02 | Menu desktop/mobile | Alta | Links levam à seção correta; menu móvel abre, fecha e é navegável por teclado |
| RF-03 | Hero e CTA do catálogo | Alta | CTA desloca para #animais e é visível em telas pequenas |
| RF-04 | Galeria da propriedade | Alta | Fotos são responsivas, têm alt descritivo e não distorcem |
| RF-05 | Catálogo de destaques | Alta | 0 a 6 itens exibidos a partir de dados locais, sem páginas individuais |
| RF-06 | Status por item | Alta | Disponível, reservado e vendido são visualmente distintos **e também descritos por texto** |
| RF-07 | WhatsApp geral | Alta | Abre conversa no número configurado com mensagem padrão |
| RF-08 | WhatsApp por item | Alta | Ao clicar num item disponível, mensagem inclui identificação exata do animal/lote |
| RF-09 | Tratamento de indisponíveis | Alta | Item reservado/vendido não simula disponibilidade; CTA pode dirigir ao contato geral |
| RF-10 | Redes sociais | Média | Links são exibidos somente quando oficialmente confirmados |
| RF-11 | Dados desacoplados | Alta | Atualizar um animal não exige alterar o componente visual do card |
| RF-12 | Fallback de dados ausentes | Alta | Informações ausentes não aparecem como "undefined", datas erradas ou preços inventados |

### 7.1 Regras de negócio do catálogo

- **Status permitidos:** Disponível | Reservado | Vendido.
- **Disponível:** mostrar "Consultar este animal" e mensagem contextual no WhatsApp.
- **Reservado:** exibir "Reservado"; permitir, se desejado, "Consultar outros animais" com mensagem genérica.
- **Vendido:** exibir "Vendido"; não oferecer a compra daquele item.
- **Idade:** opcional. Se mostrada, calcular a partir da data de nascimento, ou fornecer valor revisado manualmente; evitar idade estática desatualizada.
- **Lotes:** usar o mesmo card com identificação/categoria "Lote" e descrição apropriada.
- **Ordem:** manual, definida no arquivo de dados.
- **Limite inicial sugerido:** 6 cards; sem paginação e sem filtros na V1.
- **Itens inativos:** podem permanecer no arquivo de dados, mas não são renderizados se a propriedade published estiver desativada.

### 7.2 Contrato de dados sugerido

Exemplo **estrutural**, sem afirmar que os dados de exemplo representam animais reais:

~~~ts
type AnimalStatus = "disponivel" | "reservado" | "vendido";
type AnimalCategory = "reprodutor" | "matriz" | "cordeiro" | "lote" | "outro";

interface FeaturedAnimal {
  id: string;
  codigo: string;
  nome?: string;
  categoria: AnimalCategory;
  raca?: string;
  sexo?: "macho" | "femea" | "misto";
  nascimento?: string; // ISO YYYY-MM-DD, quando aplicável
  descricao?: string;
  imagem: string; // caminho de imagem autorizada
  alt: string;
  status: AnimalStatus;
  publicado: boolean;
}
~~~

**Dados mínimos obrigatórios para exibir um card:** id, código/identificação, categoria, imagem real com autorização de uso, alt, status e publicado = true. Os demais campos são opcionais. Deve existir um estado vazio funcional sem nenhum card publicado.

### 7.3 WhatsApp

- Configurar número oficial apenas após a família informar; formato internacional numérico (55 + DDD + número).
- Link geral: https://wa.me/NUMERO?text=MENSAGEM_CODIFICADA.
- Exemplo de mensagem geral: "Olá! Conheci a Cabanha Grandi pelo site e gostaria de saber mais sobre os animais."
- Exemplo contextual: "Olá! Vi no site o animal/lote [CÓDIGO] e gostaria de consultar informações e disponibilidade."
- Codificar a mensagem corretamente para URL; validar ausência de número (neste caso não renderizar links quebrados).
- Não capturar dados pessoais em formulário na V1.

## 8. Requisitos não funcionais

| ID | Requisito | Critério |
|---|---|---|
| RNF-01 | Responsividade | Usável em 360px, 390px, 768px, 1024px e 1440px |
| RNF-02 | Acessibilidade | HTML semântico, navegação por teclado, foco visível, contraste legível, alt apropriado |
| RNF-03 | Desempenho | Priorizar LCP e CLS; fotos otimizadas em WebP/AVIF; lazy loading abaixo da primeira dobra |
| RNF-04 | SEO | title, description, idioma pt-BR, headings coerentes, Open Graph básico; domínio/canonical só após confirmação |
| RNF-05 | Segurança | Sem chaves privadas no frontend; links externos seguros; dependências atualizadas |
| RNF-06 | Manutenibilidade | Componentes pequenos, conteúdo separado, tipagem explícita e instruções de execução no README |
| RNF-07 | Privacidade | Evitar formulários e rastreadores inicialmente; avaliar LGPD antes de instalar analytics/marketing |
| RNF-08 | Navegadores | Testar Safari iOS, Chrome Android e navegadores desktop atuais |

**Referência de qualidade:** buscar Lighthouse ≥ 90 em Performance/Acessibilidade/Boas Práticas/SEO, sem assumir pontuação antes de medir em ambiente publicado.

## 9. Direção visual e UI/UX

### 9.1 Referências recebidas

O material compartilhado inclui:
1. Foto de um ovino com características visuais da raça Dorper.
2. Painel de marca com logotipo clássico, tons de oliva, bege, marrom e cinza.
3. Painel de marca em vermelho e branco com referências regionais e vestuário.

**Importante:** os painéis são **referências de identidade**, não arquivos finais de logotipo nem prova de que instalações, pessoas ou animais retratados pertencem à propriedade.

### 9.2 Direção proposta (aguarda validação)

Adotar um visual **premium rural, sóbrio e familiar**, inspirado inicialmente no painel verde-oliva:

| Token sugerido | Cor aproximada | Uso |
|---|---|---|
| primary | #303626 | Header, títulos fortes, CTAs principais |
| background | #F4F0E8 | Fundo claro e seções alternadas |
| surface | #FFFFFF | Cards |
| accent | #A27A50 | Detalhes, divisórias e ícones |
| muted | #C2BCB2 | Bordas e superfícies neutras |
| text | #24271E | Texto principal |

**Paleta não aprovada.** Se a família escolher a identidade vermelha, adaptar todos os tokens de forma consistente, sem misturar estilos indiscriminadamente.

- **Tipografia sugerida:** serifada elegante para títulos (ex.: Libre Baskerville) e sans-serif legível para corpo (ex.: Inter), sujeita a teste.
- **Fotografia:** protagonistas reais do campo, composição ampla no hero e detalhes nos cards.
- **Cards:** bordas arredondadas discretas, sombra mínima, badge textual de status e botão claro.
- **Layout:** respiro generoso, seções com largura máxima, espaços consistentes, boas áreas de clique.
- **Interações:** âncoras suaves respeitando preferência por movimento reduzido; hover/focus claros, sem animações pesadas.

### 9.3 Uso de IA em fotografias

A família deseja melhorar fotografias existentes com IA. Isso pode envolver ajuste de luminosidade, nitidez, cor, enquadramento e remoção de imperfeições irrelevantes. **Não alterar características físicas reais dos animais, simular instalações inexistentes ou apresentar composições fictícias como fotos documentais da propriedade.** Imagens meramente conceituais devem ser identificadas como ilustrações, não como registros reais.

### 9.4 Wireframe textual

~~~text
[LOGO]              Início  História  Propriedade  Criação  Animais  Contato
──────────────────────────────────────────────────────────────────────────
[HERO — FOTO REAL EM DESTAQUE]
  Cabanha Grandi Dorper
  Título + subtítulo
  [Conheça nossos animais]   [Nossa história]
──────────────────────────────────────────────────────────────────────────
[NOSSA HISTÓRIA]           [FOTO DA FAMÍLIA / ROTINA]
──────────────────────────────────────────────────────────────────────────
[NOSSA PROPRIEDADE]
  Galeria de fotografias e breve apresentação
──────────────────────────────────────────────────────────────────────────
[NOSSA CRIAÇÃO]            [FOTO DOS OVINOS]
  Texto breve e diferenciais validados
──────────────────────────────────────────────────────────────────────────
[ANIMAIS EM DESTAQUE]
  [CARD] [CARD] [CARD]
  [CARD] [CARD] [CARD]     (quando houver itens reais)
──────────────────────────────────────────────────────────────────────────
[CONTATO / CTA FINAL]
  [Conversar no WhatsApp]   [Instagram confirmado]
──────────────────────────────────────────────────────────────────────────
[RODAPÉ]
~~~

**Mobile:** colunas empilhadas, 1 card por linha em telas estreitas, menu compacto e CTAs grandes; sem rolagem horizontal.

## 10. Orientação técnica para o Codex

### 10.1 Stack sugerida (a validar ao iniciar código)

- **Vite + React + TypeScript:** landing page leve, sem necessidade inicial de SSR.
- **Tailwind CSS:** estilos utilitários e tokens de marca.
- **Lucide React:** ícones, se necessários.
- **Hospedagem estática:** Vercel, Netlify ou alternativa a escolher.
- **Sem Supabase, banco de dados ou API na V1.**

Se a implementação indicar necessidade real de uma alternativa, registrar a decisão antes de alterar a stack.

### 10.2 Organização sugerida

~~~text
/
├── docs/
│   └── PRD.md
├── public/
│   └── images/              # Somente imagens autorizadas
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── AnimalCard.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── StorySection.tsx
│   │   ├── PropertySection.tsx
│   │   ├── BreedingSection.tsx
│   │   ├── AnimalsSection.tsx
│   │   └── ContactSection.tsx
│   ├── data/
│   │   ├── animals.ts
│   │   └── siteContent.ts
│   ├── lib/
│   │   └── whatsapp.ts
│   ├── App.tsx
│   └── main.tsx
└── README.md
~~~

Esta estrutura é uma **proposta**, não indica que os arquivos já existem.

### 10.3 Conteúdo e configurações

Centralizar informações mutáveis (WhatsApp, Instagram, endereço geral, textos e catálogo) em módulo de configuração/dados. Usar placeholders explícitos de desenvolvimento quando algo não estiver confirmado; **não publicar placeholders como fatos**. O protótipo pode usar dados simulados, identificados como tais, mas a publicação não.

### 10.4 Figma ↔ Codex

**Decisão de fluxo:** o Codex será usado também para **criar e editar designs nativos diretamente no Figma via MCP remoto**, e não apenas para consumir telas prontas. O trabalho de design será revisado e refinado por pessoas no Figma antes do desenvolvimento.

1. No aplicativo do Codex, instalar o plugin do Figma em **Plugins → Figma → Install Figma**, autorizando o acesso.
2. Usar o **servidor MCP remoto** (`https://mcp.figma.com/mcp`) e as skills de design disponíveis; o servidor desktop não oferece escrita no canvas.
3. Criar/selecionar um arquivo Figma Design e fornecer ao Codex seu URL, o PRD do repositório e os materiais de identidade visual.
4. Pedir ao Codex que use as ferramentas de escrita do Figma, incluindo **`use_figma`**, para produzir **frames desktop (1440px) e mobile (390px)**, com variantes de componentes e Auto Layout; opcional tablet (768px).
5. Definir na criação: variáveis/tokens de cor, tipografia, escala de espaçamento, botões, cartões, badges de status e estrutura por seções. Todos os elementos devem ser **editáveis**, evitando entregar somente uma imagem rasterizada do layout.
6. Revisar o protótipo, a hierarquia editorial e os estados dos cards no Figma; registrar link e frames aprovados como fonte de verdade.
7. Usar o Codex para implementar no repositório os componentes e interações aprovados.
8. Comparar a página construída com os frames do Figma em desktop e mobile, corrigindo divergências antes do deploy.

**Requisitos e limites do MCP:** segundo a documentação oficial da Figma (consultada em 03/11/2026), a escrita no canvas está em beta, exige plano elegível e permissão de edição; escrever fora dos rascunhos exige Full seat. O servidor remoto oferece escrita, enquanto o desktop é limitado nesse ponto. Resultado gerado pelo agente pode exigir revisão/limpeza manual. Não presumir que o acesso MCP já esteja configurado no Codex.

**Fontes oficiais:**
- https://help.figma.com/hc/en-us/articles/39888629089175-Codex-and-Figma-Set-up-the-MCP-server
- https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/
- https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/

## 11. Histórias de usuário

- **US-01:** Como visitante, quero entender rapidamente o que é a Cabanha Grandi, para decidir se continuo navegando.
- **US-02:** Como possível comprador, quero ver animais/lotes em destaque e seus status, para escolher sobre o que perguntar.
- **US-03:** Como interessado, quero abrir o WhatsApp com o item identificado, para conversar sem copiar informações.
- **US-04:** Como visitante, quero conhecer a história e a propriedade, para avaliar a credibilidade da cabanha.
- **US-05:** Como responsável pelo site, quero alterar um card em arquivo local, para atualizar o catálogo sem reescrever componentes.
- **US-06:** Como usuário no celular, quero navegar por todas as seções sem zoom ou rolagem lateral, para usar o site facilmente.

## 12. Critérios de aceite da V1

- [ ] A aplicação abre em uma URL pública e apresenta **uma única página**.
- [ ] Header, âncoras, menu móvel e CTAs funcionam.
- [ ] As seções de história, propriedade, criação, animais e contato estão presentes.
- [ ] Há até 6 cards reais publicados; quando não há, aparece estado vazio honesto.
- [ ] Status disponível/reservado/vendido exibido corretamente e sem depender só de cor.
- [ ] WhatsApp usa número válido configurado; link por item inclui identificação correta.
- [ ] Nenhum card reservado ou vendido é apresentado como disponível.
- [ ] A página funciona em tamanhos móveis e desktop definidos.
- [ ] Imagens não distorcem, têm alt apropriado e estão otimizadas.
- [ ] SEO básico, acessibilidade e testes manuais concluídos.
- [ ] Não há links fictícios, perfis não confirmados, endereços inventados ou conteúdo falso.
- [ ] Código e instruções de execução estão documentados no GitHub.

## 13. Etapas de entrega

| Etapa | Entregável | Saída esperada |
|---|---|---|
| E0 — Definição | PRD aprovado + checklist de conteúdo | Escopo congelado para V1 |
| E1 — Design | Codex criando/editando frames e componentes diretamente no Figma via MCP remoto | Protótipo nativo e editável validado pela família |
| E2 — Base | Setup Vite/React/TS/Tailwind + layout e tokens | Site executando localmente |
| E3 — Conteúdo | Seções, galeria e catálogo estático | Jornada principal completa |
| E4 — Conversão | WhatsApp, estados dos cards, links | Contatos funcionando |
| E5 — Qualidade | Responsividade, acessibilidade, SEO, imagens | Checklist de aceite concluído |
| E6 — Publicação | Deploy, domínio e revisão com família | Landing page publicada |

Cada etapa pode ser registrada em commits/PRs menores no GitHub. Não confundir conclusão do PRD com implementação do site.

## 14. Decisões pendentes e dependências

| Tema | Decisão / insumo necessário | Impacto |
|---|---|---|
| Marca | Escolher identidade final (oliva ou vermelha) e disponibilizar logo isolado em SVG/PNG transparente | Design |
| Nome e slogan | Confirmar apresentação oficial "Cabanha Grandi Dorper" e autorização do slogan | Conteúdo |
| Local | Confirmar Nova Prata/RS e nível de detalhe do endereço | Hero/contato |
| História | **Fatos principais já levantados:** origens em Torricella del Pizzo, família em Nova Prata e iniciativa de Ênio e Anderson. **Pendente:** aprovação do texto, dados genealógicos/datas e fotos autorizadas | Institucional |
| Propriedade | Fotos originais e informações reais de infraestrutura/manejo | Galeria/criação |
| Animais | 3–6 animais/lotes, identificações, categorias, fotos, status e dados aprovados | Catálogo |
| Comercial | Confirmar se há preços públicos, política de contato e quais status ficam visíveis | Cards |
| Contatos | Número oficial de WhatsApp, Instagram correto e e-mail opcional | Conversão |
| Domínio | Confirmar titularidade e DNS do domínio desejado | Publicação |
| Figma | Instalar plugin/MCP remoto no Codex, confirmar permissões, obter link do arquivo e aprovar frames editáveis | Design e handoff |
| Hospedagem | Definir provedor e responsável pelo deploy | Publicação |

**A V1 pode ser prototipada com conteúdo de demonstração devidamente sinalizado, mas não deve ser publicada como comercialmente ativa sem validar esses pontos.**

## 15. Riscos e mitigação

- **Fotos e animais ainda indisponíveis:** montar estado vazio e espaços reservados no protótipo; não inventar ofertas.
- **Marca ainda não consolidada:** usar tokens e componentes que permitam trocar paleta/logotipo.
- **Catálogo muda com frequência:** dados locais resolvem a V1; avaliar CMS somente se manutenção ficar onerosa.
- **Promessas comerciais indevidas:** revisar todo o texto com os responsáveis antes do lançamento.
- **Uso de fotos com IA:** preservar fidelidade ao que existe e obter autorização de imagem.
- **Risco regulatório na venda/transporte:** informação e tratativas legais/operacionais ficam a cargo da família e dos profissionais responsáveis, fora do fluxo automatizado da V1.

## 16. Critério de sucesso do projeto

A versão 1 será considerada concluída quando qualquer visitante conseguir **conhecer a Cabanha Grandi, ver sua criação e os animais apresentados, identificar seu status e iniciar uma conversa comercial**, de forma simples e confiável, em celular ou computador.

---

**Nota de governança:** este PRD contém definições já acordadas na conversa e propostas técnicas/de design ainda sujeitas a validação. A seção da história é um rascunho editorial, não uma biografia aprovada. Alterações de escopo após aprovação devem ser registradas em nova revisão do documento.

**Histórico:** v1.1 — inclusão do legado familiar e de Ênio/Anderson como idealizadores; atualização do fluxo de criação nativa de designs no Figma pelo Codex via MCP remoto.
