export interface BlogComparisonRow {
  travelerType: string;
  bestDestination: string;
}

export interface BlogSection {
  title: string;
  intro?: string[];
  bulletPoints?: string[];
  subSections?: {
    title: string;
    intro?: string[];
    bulletPoints?: string[];
  }[];
  comparisonTable?: {
    columns: [string, string];
    rows: BlogComparisonRow[];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  author: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  heroKicker: string;
  heroSubtitle: string;
  intro: string[];
  sections: BlogSection[];
  finalThoughts: string[];
  seoKeywords: string[];
}
