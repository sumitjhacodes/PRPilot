import { Octokit } from "@octokit/rest";

import { getGithubApp } from "./app.js";

export async function getInstallationClient(
  installationId: number,
): Promise<Octokit> {
  return getGithubApp().getInstallationOctokit(
    installationId,
  ) as Promise<Octokit>;
}