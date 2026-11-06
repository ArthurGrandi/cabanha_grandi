/**
 * Cabanha Grandi — Dorper em Foco v1.0
 * Contratos independentes de framework. Não são uma implementação React.
 * Strings de URL, IDs, conteúdo e datas devem ser validados em runtime.
 */

export type ComponentId =
  | 'CG/Button' | 'CG/IconButton' | 'CG/StatusBadge' | 'CG/AnimalCard'
  | 'CG/EmptyState' | 'CG/SectionHeading' | 'CG/Brand' | 'CG/Header'
  | 'CG/MobileMenu' | 'CG/Hero' | 'CG/Gallery' | 'CG/StorySection'
  | 'CG/ContactBand' | 'CG/Footer';

export type ButtonVariant = 'primary' | 'secondary' | 'inverse';
export type ButtonSize = 'md' | 'lg';
export type IconName = 'arrow-right' | 'menu' | 'close' | 'whatsapp' | 'sheep' | 'location';
export type SectionAnchor = '#inicio' | '#historia' | '#propriedade' | '#criacao' | '#animais' | '#contato';
export type NavigationAnchor = Exclude<SectionAnchor, '#inicio'>;
export type AnimalStatus = 'disponivel' | 'reservado' | 'vendido';
export type AnimalCategory = 'reprodutor' | 'matriz' | 'cordeiro' | 'lote' | 'outro';

/** Links não têm disabled. Sem destino aprovado, omitir o link. */
export type Action =
  | { kind: 'link'; label: string; href: string; external?: boolean; disabled?: never; command?: never }
  | { kind: 'button'; label: string; command: string; disabled?: boolean; href?: never; external?: never };

export interface ButtonProps {
  action: Action;
  variant?: ButtonVariant; // primary
  size?: ButtonSize; // md = 48px mínimo; lg = 56px
  icon?: IconName;
  iconPosition?: 'start' | 'end'; // end
  fullWidth?: boolean; // false; true em CTAs empilhados mobile
}

export interface IconButtonProps {
  label: string; // obrigatório; nome acessível
  icon: IconName;
  command: string;
  variant?: 'plain' | 'outline'; // outline
  disabled?: boolean;
  expanded?: boolean; // obrigatório quando controla menu
  controlsId?: string; // obrigatório quando controla menu
}

/** Documento conceitual pode usar illustrative; catálogo de produção exige approved. */
export interface ImageSource {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string; // '50% 50%'; CSS object-position
  attribution?: string;
}
export type ImageAsset =
  | { state: 'approved'; image: ImageSource }
  | { state: 'illustrative'; image: ImageSource; caption: 'Imagem ilustrativa' }
  | { state: 'missing' | 'error'; fallbackLabel: string; image?: never };

export interface StatusBadgeProps { status: AnimalStatus; }

export interface FeaturedAnimal {
  id: string;
  codigo: string;
  categoria: AnimalCategory;
  imagem: Extract<ImageAsset, { state: 'approved' }>;
  status: AnimalStatus;
  publicado: boolean;
  nome?: string;
  raca?: string;
  sexo?: 'macho' | 'femea' | 'misto';
  nascimento?: string; // ISO YYYY-MM-DD, validado
  descricao?: string;
}

export type ContactChannel =
  | { state: 'confirmed'; whatsappNumber: string } // dígitos E.164 sem '+', DDI incluso
  | { state: 'unconfirmed'; whatsappNumber?: never };

export type AnimalCardProps =
  | { mode: 'production'; animal: FeaturedAnimal; contact: ContactChannel }
  | { mode: 'demonstration'; label: 'Demonstração'; status: AnimalStatus; image: ImageAsset; animal?: never; contact?: never };

export interface EmptyStateProps {
  message?: string; // 'Entre em contato para consultar os animais disponíveis.'
  description?: string;
  icon?: 'sheep';
  action?: Action; // omitir se destino desconhecido
}

export interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  level?: 2 | 3; // 2; h1 pertence ao Hero
  alignment?: 'left' | 'center'; // left
  tone?: 'default' | 'inverse'; // default
}

export interface BrandProps {
  appearance?: 'light-background' | 'dark-background'; // light-background
  size?: 'desktop' | 'mobile'; // desktop
  approvedAsset?: ImageSource; // ausência usa assinatura textual identificada como provisória no protótipo
  href?: '#inicio';
}

export interface NavigationItem { label: string; href: NavigationAnchor; }

export interface HeaderProps {
  brand: BrandProps;
  items: readonly NavigationItem[];
  contactAction?: Action;
  sticky?: boolean; // false
  menuId: string;
  menuOpen: boolean;
}

export interface MobileMenuProps {
  id: string;
  open: boolean;
  accessibleTitle?: string; // 'Navegação principal'
  items: readonly NavigationItem[];
  brand: BrandProps;
  contactAction?: Action;
  triggerId: string; // ponto de devolução do foco
}

export interface HeroProps {
  id?: 'inicio';
  eyebrow?: string; // 'Cabanha Grandi · Nova Prata/RS'
  title?: string; // 'A força da nossa origem.'
  description: string;
  image: ImageAsset;
  primaryAction?: Action;
  secondaryAction?: Action;
}

export interface GalleryItem { id: string; image: ImageAsset; caption?: string; }
export interface GalleryProps {
  id?: 'propriedade';
  items: readonly GalleryItem[]; // 2–5 para composição de produção; 0 aciona fallback
  title?: string;
  description?: string;
  variant?: 'grid'; // sem carrossel na base
}

export interface StorySectionProps {
  id: 'historia' | 'criacao';
  heading: SectionHeadingProps;
  paragraphs: readonly string[];
  image?: ImageAsset;
  mediaPosition?: 'left' | 'right'; // right
}

export interface ContactBandProps {
  id?: 'contato';
  title?: string; // 'Vamos conversar?'
  description: string;
  contact: ContactChannel;
  tone?: 'wine';
}

export interface FooterProps {
  brand: BrandProps;
  items: readonly NavigationItem[];
  locality?: string; // 'Nova Prata · RS', somente após confirmação
  year: number; // ano corrente, não fixar na implementação
  instagramUrl?: string; // perfil aprovado
  email?: string; // endereço aprovado
}

/** Regras de adaptação comuns; não representam estados controlados pelo usuário. */
export type ResponsiveMode = 'mobile' | 'tablet' | 'desktop';

export interface SiteContent {
  hero: HeroProps;
  history: StorySectionProps;
  property: GalleryProps;
  creation: StorySectionProps;
  contact: ContactChannel;
  animals: readonly FeaturedAnimal[]; // inicial: []
}
