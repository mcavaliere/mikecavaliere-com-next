import fs from "fs";

import Anthropic from "@anthropic-ai/sdk";
import { loadEnvConfig } from "@next/env";
import { system as SYSTEM_PROMPT } from "./prompt";
import { replaceTemplateVars } from "./replaceTemplateVars";

loadEnvConfig(process.cwd());

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("ANTHROPIC_API_KEY is required");
}

async function main() {
  // read in the file 2024-07-12.md
  const inputFilePath = "./2024-07-12.md";
  const typesFilePath = "../components/AIResourcesTable/types.tsx";

  const inputFileContent = fs.readFileSync(inputFilePath, "utf8");
  const typesFileContent = fs.readFileSync(typesFilePath, "utf8");

  const anthropic = new Anthropic();

  const system = replaceTemplateVars(SYSTEM_PROMPT, {
    types: typesFileContent,
  });

  console.log(`system prompt: `, system);

  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1024,
    system,
    messages: [{ role: "user", content: inputFileContent }],
  });

  console.log(`---------------- OUTPUT: `);
  console.log(msg);

  console.log(`----------------  `);

  // import types for AIResource as text file
  // import prompt.md
  // Run prompt. Prompt will take type definitions into context, run them against markdown content, and generate new JSON objects.
  // Append new JSON to ai-resources.ts
}

main().catch(console.error);
