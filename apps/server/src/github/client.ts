import { Octokit } from "@octokit/rest";

import { githubApp } from "./app.js";

export async function getInstallationClient(
  installationId: number,
) {
  const octokit = await githubApp.getInstallationOctokit(
    installationId,
  );

  return octokit as Octokit;
}