export interface NewSiteInfo {
  title: string;
  tagline: string;
  subdomain: string;
}

export interface PersonInfo {
  name: string;
  profession: string;
  bio: string;

}

interface ThemeColors {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface ThemePreference {
  font: string;
  colors: ThemeColors;
  theme: "dark" | "light";
}

export interface MetaData {
  title: string;
  description: string;
  iconURL: string;
}
