import { Octokit, App } from "octokit";
import dotenv from "dotenv";

/**
 * Run this file from the root of the project.
 */

dotenv.config({ path: "./scripts/.env" });

async function main() {
  const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
}

main().catch(console.error);
