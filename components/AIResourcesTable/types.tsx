export type AIResourceCategory =
  | "libraries"
  | "tools"
  | "projects"
  | "articles"
  | "learning resources";
export type AIResourceTag =
  | "browser"
  | "sdk"
  | "machine learning"
  | "framework"
  | "low-code"
  | "video"
  | "article"
  | "rag"
  | "saas app"
  | "prompt engineering"
  | "learning resource";

const AIResourceCategoryColors = {
  libraries: "bg-yellow-800",
  tools: "bg-blue-800",
  articles: "bg-red-800",
  "learning resources": "bg-green-800",
  // "projets": "bg-blue-800",
  projects: "bg-violet-800",
};

export type SQLDateString =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export type AIResourceBase = {
  name: string;
  // AKA the project tagline.
  description: string;
  // Populate these as the list grows, and we figure out how best to organize the info.
  tags?: AIResourceTag[];
  category: AIResourceCategory;
  // Date added to this list.
  addedOn: SQLDateString;
  // We can gradually add this as "what's cool about this project."
  notes?: string;
};

export type AIResourceWithWebsite = AIResourceBase & {
  websiteUrl: string;
  githubUrl?: string;
};

export type AIResourceWithGithub = AIResourceBase & {
  githubUrl: string;
  websiteUrl?: string;
};

export type AIResource = AIResourceWithWebsite | AIResourceWithGithub;
