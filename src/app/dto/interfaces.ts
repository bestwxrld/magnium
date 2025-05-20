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
}

export interface LandingPageProps {
  heroContent: HeroContentProps;
  videoContent: VideoContentProps;
}

