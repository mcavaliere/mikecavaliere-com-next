import dotenv from "dotenv";
import { Client } from "@julep/sdk";
import { AIResources } from "../data/ai-resources";
import { AIResource } from "@/components/AIResourcesTable/types";
import { inspect } from "util";

import * as repl from "repl";

dotenv.config({
  path: "scripts/.env",
});

const apiKey = process.env.JULEP_API_KEY;
const baseUrl = process.env.JULEP_API_URL;
const client = new Client({ apiKey, baseUrl });

const instructions = [
  "The user will inform you about the type of AI resource they want to find.",
  "You will will call the search_resources function to find resources based on the users needs. You can call this multiple times if needed.",
  "You will display all of the resources found using the log_matches function.",
  "You will ask the user if these results are helpful. If they are not, you will ask more questions to refine the search. If they are, you will proceed to the next step.",
  "You will ask the user if they want more information on a specific resource. If they do, you will provide them with the information.",
];

const situationPrompt = `
  You are Dave, an expert in AI resources for JavaScript developers.
  You know all the resources available for AI and JavaScript developers.
  You are extremely specific about the resources you look for and seek to understand all the parameters when searching for resources.
  After that, you find the best resources for the user and summarize themn.
  Here, you are helping the a user find some resources on AI. The user will inform you about the type of AI resource they want to find.
  Follow the instructions strictly.
`;

function search_resources(query: string): AIResource[] {
  const matches: AIResource[] = [];
  if (!query) throw new Error("No query provided.");
  const queryFragments = query.split(/\s+/);

  for (const resource of AIResources) {
    const { name, description } = resource;
    let isMatch = false;

    for (const fragment of queryFragments) {
      if (
        name.toLowerCase().includes(fragment.toLowerCase()) ||
        description.toLowerCase().includes(fragment.toLowerCase())
      ) {
        isMatch = true;
        break;
      }
    }

    if (isMatch) {
      matches.push(resource);
    }
  }
  return matches;
}

function log_matches(matches: AIResource[]): void {
  console.log("Here are the matching resources:");
  for (const match of matches) {
    console.log(`- ${match.name}: ${match.description}`);
  }
}

const tools = [
  {
    type: "function" as "function" | "webhook",
    function: {
      name: "search_resources",
      function: search_resources,
      description: "Retrieves a list of matching resources based on the string query provided.",
      parameters: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "The search string to match resources against.",
          },
        },
        required: ["query"],
      },
    },
  },
  {
    type: "function" as "function" | "webhook",
    function: {
      name: "log_matches",
      function: log_matches,
      description: "Logs the matching resources to the console.",
      parameters: {
        type: "object",
        properties: {
          matches: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
                description: {
                  type: "string",
                },
              },
            },
          },
        },
        required: ["matches"],
      },
    },
  },
];

async function main() {
  const agent = await client.agents.create({
    name: "Dave",
    about: "An agent that does stuff.",
    tools,
    instructions,
    model: "gpt-4o",
    default_settings: {
      temperature: 0.5,
      top_p: 1,
      min_p: 0.01,
      presence_penalty: 0,
      frequency_penalty: 0,
      length_penalty: 1.0,
    },
    metadata: { name: "Dave" },
  });

  const user = await client.users.create({
    name: "Anon",
    about: "A JavaScript developer who loves AI, and wants to search for AI resources",
    metadata: { name: "Jenna" },
  });

  const session = await client.sessions.create({
    userId: user.id,
    agentId: agent.id,
    situation: situationPrompt,
    metadata: { agentId: agent.id, userId: user.id },
  });

  repl.start({
    prompt: "julep > ",
    eval: async (cmd: string, context: any, filename: string, callback: Function) => {
      try {
        const response = await client.sessions.chat(session.id, {
          messages: [
            {
              role: "user",
              content: cmd,
              name: "Anon",
            },
          ],
          recall: false,
          remember: false,
        });

        const responseMessage = response.response[0][0];

        switch (responseMessage.role) {
          case "function_call": {
            const { arguments: args, name } = JSON.parse(responseMessage.content);

            const jsonArgs = JSON.parse(args);

            if (name === "search_resources") {
              const matches = search_resources(jsonArgs.query);
              log_matches(matches);
            }
            break;
          }

          case "assistant": {
            console.log(responseMessage.content);
            break;
          }

          default:
            console.log(`response:  `, inspect(response, false, null, true));
            break;
        }
      } catch (err) {
        console.log("JULEP ERROR: ", err);
      }
    },
  });
}

main();
