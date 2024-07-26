import fs from "fs";
import ora from "ora";
import Anthropic from "@anthropic-ai/sdk";
import { loadEnvConfig } from "@next/env";
import { system as SYSTEM_PROMPT } from "./prompt";
import { replaceTemplateVars } from "./replaceTemplateVars";
import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { aIResourceSchema } from "./aiResourceSchema";
import { z } from "zod";
import { inspect } from "util";

loadEnvConfig(process.cwd());

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error("ANTHROPIC_API_KEY is required");
}

async function main() {
  // read in the file 2024-07-12.md
  const inputFilePath = "./2024-07-25.md";
  const typesFilePath = "../components/AIResourcesTable/types.tsx";

  const inputFileContent = fs.readFileSync(inputFilePath, "utf8");
  const typesFileContent = fs.readFileSync(typesFilePath, "utf8");

  const system = replaceTemplateVars(SYSTEM_PROMPT, {
    types: typesFileContent,
  });

  console.log(`system prompt: `, system);

  const spinner = ora(`Generating...`).start();

  try {
    const response = await generateObject({
      model: anthropic("claude-3-5-sonnet-20240620"),
      system,
      maxTokens: 4096,
      messages: [{ role: "user", content: inputFileContent }],
      schema: z.object({
        resources: z.array(aIResourceSchema),
      }),
    });

    // console.log(inspect(response.object.resources, false, null, true));
    console.log(`response: `, inspect(response, false, null, true));
  } catch (error) {
    console.log(`error: `, error);
  } finally {
    spinner.stop();
  }

  // const json = JSON.parse(msg.content[0].text);

  // console.log(`---------------- json:  `, json);
  // console.log(`response:`, msg);

  // import types for AIResource as text file
  // import prompt.md
  // Run prompt. Prompt will take type definitions into context, run them against markdown content, and generate new JSON objects.
  // Append new JSON to ai-resources.ts
}

main().catch(console.error);
