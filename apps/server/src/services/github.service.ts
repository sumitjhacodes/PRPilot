import { getInstallationClient } from "../github/client.js";

export async function getRepository(
  installationId: number,
  owner: string,
  repo: string,
) {
  const octokit = await getInstallationClient(installationId);

  const response = await octokit.rest.repos.get({
    owner,
    repo,
  });

  return response.data;
}