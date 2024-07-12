// Generated by ts-to-zod
import { z } from "zod";

export const aIResourceCategorySchema = z.union([
  z.literal("libraries"),
  z.literal("tools"),
  z.literal("projects"),
  z.literal("articles"),
  z.literal("learning resources"),
]);

export const aIResourceTagSchema = z.union([
  z.literal("browser"),
  z.literal("sdk"),
  z.literal("machine learning"),
  z.literal("framework"),
  z.literal("low-code"),
  z.literal("video"),
  z.literal("article"),
  z.literal("rag"),
  z.literal("saas app"),
  z.literal("prompt engineering"),
  z.literal("learning resource"),
]);

export const sQLDateStringSchema = z.any();

export const aIResourceBaseSchema = z.object({
  name: z.string(),
  description: z.string(),
  tags: z.array(aIResourceTagSchema).optional(),
  category: aIResourceCategorySchema,
  addedOn: sQLDateStringSchema,
  notes: z.string().optional(),
});

export const aIResourceWithWebsiteSchema = aIResourceBaseSchema.and(
  z.object({
    websiteUrl: z.string(),
    githubUrl: z.string().optional(),
  }),
);

export const aIResourceWithGithubSchema = aIResourceBaseSchema.and(
  z.object({
    githubUrl: z.string(),
    websiteUrl: z.string().optional(),
  }),
);

export const aIResourceSchema = z.union([aIResourceWithWebsiteSchema, aIResourceWithGithubSchema]);
