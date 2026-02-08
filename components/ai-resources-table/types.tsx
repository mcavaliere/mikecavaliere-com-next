import { TailwindColor } from "@/lib/utils/TailwindColor";

export type AIResourceCategory = "libraries" | "tools" | "projects" | "articles" | "learning";

export const AI_RESOURCE_TAGS = [
  "agentic workflows",
  "agents",
  "article",
  "browser",
  "chat ui",
  "cli",
  "chrome extension",
  "code gen",
  "framework",
  "learning resource",
  "lib",
  "llm client",
  "llm memory",
  "low-code",
  "machine learning",
  "multi-agent",
  "multimodal",
  "inference",
  "images",
  "llm observability",
  "open source",
  "perplexity clone",
  "pdf",
  "platform",
  "project",
  "prompt engineering",
  "q&a",
  "rag",
  "saas app",
  "semantic search",
  "speech recognition",
  "text-to-speech",
  "transcription",
  "sdk",
  "testing",
  "dev tool",
  "ui",
  "video",
  "web scraping",
] as const;

export type AIResourceTag = (typeof AI_RESOURCE_TAGS)[number];

// NOTE: use this to generate a new set of tag colors. Save the generated version below.
// export const AIResourceTagColors = AI_RESOURCE_TAGS.reduce((acc, tag) => {
//   acc[tag] = new TailwindColor({ prefix: "bg" }).pick();
//   return acc;
// }, {});

// console.log(`---------------- AIResourceTagColors:  `, AIResourceTagColors);

export const AIResourceTagColors = {
  "agentic workflows": "bg-blue-800",
  agents: "bg-red-900",
  article: "bg-red-700",
  browser: "bg-green-300",
  "chat ui": "bg-blue-800",
  cli: "bg-purple-700",
  "chrome extension": "bg-indigo-400",
  "code gen": "bg-gray-600",
  framework: "bg-indigo-400",
  "learning resource": "bg-gray-400",
  lib: "bg-gray-600",
  "llm client": "bg-green-500",
  "llm memory": "bg-blue-900",
  "low-code": "bg-blue-300",
  "machine learning": "bg-indigo-300",
  "multi-agent": "bg-gray-500",
  multimodal: "bg-indigo-300",
  inference: "bg-red-600",
  images: "bg-green-500",
  "llm observability": "bg-indigo-700",
  "open source": "bg-purple-800",
  "perplexity clone": "bg-red-700",
  pdf: "bg-indigo-900",
  platform: "bg-blue-400",
  project: "bg-red-500",
  "prompt engineering": "bg-gray-600",
  "q&a": "bg-indigo-700",
  rag: "bg-red-400",
  "saas app": "bg-red-600",
  "semantic search": "bg-gray-400",
  "speech recognition": "bg-gray-600",
  "text-to-speech": "bg-indigo-700",
  transcription: "bg-gray-700",
  sdk: "bg-red-500",
  testing: "bg-green-600",
  "dev tool": "bg-purple-300",
  ui: "bg-green-800",
  video: "bg-red-700",
  "web scraping": "bg-indigo-500",
};

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
