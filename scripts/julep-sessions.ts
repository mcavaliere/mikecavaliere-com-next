import dotenv from "dotenv";
import { Client } from "@julep/sdk";
import { inspect } from "util";

dotenv.config({
  path: "scripts/.env",
});

const apiKey = process.env.JULEP_API_KEY;
const baseUrl = process.env.JULEP_API_URL;
const client = new Client({ apiKey, baseUrl });

async function main() {
  const sessions = await client.sessions.list();

  console.log(`sessions: `, inspect(sessions, false, null, true));
}

main();
