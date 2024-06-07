export type AIResourceCategory = "libraries" | "tools" | "projects" | "articles";
export type AIResourceTag = "sdk" | "machine learning" | "framework" | "low-code";

export type AIResourceBase = {
  name: string;
  description: string;
  tags?: AIResourceTag[];
  category: AIResourceCategory;
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
