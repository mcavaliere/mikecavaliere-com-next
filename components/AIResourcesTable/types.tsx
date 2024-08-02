export type AIResourceCategory = "libraries" | "tools" | "projects" | "articles" | "learning";
export type AIResourceTag =
  | "agentic workflows"
  | "agents"
  | "article"
  | "browser"
  | "chat ui"
  | "cli"
  | "chrome extension"
  | "code gen"
  | "framework"
  | "learning resource"
  | "lib"
  | "llm client"
  | "llm memory"
  | "low-code"
  | "machine learning"
  | "multi-agent"
  | "multimodal"
  | "inference"
  | "images"
  | "llm observability"
  | "open source"
  | "perplexity clone"
  | "pdf"
  | "platform"
  | "project"
  | "prompt engineering"
  | "q&a"
  | "rag"
  | "saas app"
  | "semantic search"
  | "speech recognition"
  | "text-to-speech"
  | "transcription"
  | "sdk"
  | "testing"
  | "dev tool"
  | "ui"
  | "video"
  | "web scraping";

export const AIResourceCategoryColors = {
  libraries: "bg-yellow-800",
  tools: "bg-blue-800",
  articles: "bg-red-800",
  learning: "bg-green-800",
  // "other": "bg-blue-800",
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
