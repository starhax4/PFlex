export interface Site {
  siteId: string;
  userId: string;
  title: string;
  tagline: string;
  subdomain: string;
  published: boolean;
  meta: MetaData;
  person: PersonData;
  createdAt: string;
  updatedAt: string;
}

interface MetaData {
  title: string;
  description: string;
  logoUrl: string;
}

interface PersonData {
  name: string;
  profession: string;
  bio: string;
  imageUrl: string;
}

export interface Page {
  pageId: string;
  siteId: string;
  title: string;
  html: string;
  css: string;
  createdAt: string;
  updatedAt: string;
}
