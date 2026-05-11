export type Language = "en" | "es";

export interface BilingualString {
  en: string;
  es: string;
}

export interface Hotspot {
  id: string;
  type: "metallurgical" | "workflow" | "ux";
  label: BilingualString;
  problem: BilingualString;
  solution: BilingualString;
  x: string;
  y: string;
}

export interface CaseStudyData {
  title: BilingualString;
  subtitle: BilingualString;
  image_ref: string;
  hotspots: Hotspot[];
}

export interface DataSet {
  title: string;
  file_type: "graph" | "micrograph";
  image_ref: string;
  description: BilingualString;
}

export interface TechnicalVaultData {
  access_code: string;
  title: BilingualString;
  subtitle: BilingualString;
  datasets: DataSet[];
}

export interface AudioConfig {
  muted: boolean;
  volume: number;
}

export interface AudioSound {
  path: string;
  label: string;
}

export interface HeroData {
  title: BilingualString;
  subline: BilingualString;
  uvp_hammer: BilingualString;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (obj: BilingualString) => string;
}

export interface AudioContextType {
  isMuted: boolean;
  volume: number;
  toggleMute: () => void;
  setVolume: (vol: number) => void;
  playSound: (soundPath: string) => void;
}
