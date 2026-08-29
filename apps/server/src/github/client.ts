import { Octokit } from "@octokit/rest";

import { getGithubApp } from "./app.js";

export async function getInstallationClient(
  installationId: number,
) {
  const octokit = await getGithubApp().getInstallationOctokit(
    installationId,
  );

  return octokit as Octokit;
}