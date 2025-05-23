// src/dto/interfaces.ts
export interface HeroContentProps {
  title: string;
  highlightedText: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface VideoContentProps {
  width: string;
  height: string;
  marginLeft: string;
  marginBottom: string;
  videoUrl?: string; 
  useVideo?: boolean; 
  videoSrc?: string;  
}

export interface LandingPageProps {
  heroContent: HeroContentProps;
  videoContent: VideoContentProps;
}

export interface FooterColumnProps {
  title: string;
  links: { href: string; label: string }[];
  colSpan: string;
}

export interface NavbarProps {
  docsLink?: string; 
}