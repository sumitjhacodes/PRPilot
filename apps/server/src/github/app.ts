import { App } from "@octokit/app";
import { Octokit } from "@octokit/rest";

import { env } from "../config/env.js";

let githubApp: App | undefined;

export function getGithubApp(): App {
  if (!env.GITHUB_APP_ID || !env.GITHUB_PRIVATE_KEY) {
    throw new Error(
      "GitHub App is not configured. Set GITHUB_APP_ID and GITHUB_PRIVATE_KEY in .env",
    );
  }

  if (!githubApp) {
    const privateKey = env.GITHUB_PRIVATE_KEY.replace(/\\n/g, "\n");

    githubApp = new App({
      appId: env.GITHUB_APP_ID,
      privateKey,
      Octokit,
    });
  }

  return githubApp;
}
