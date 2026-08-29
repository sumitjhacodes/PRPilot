import { Request, Response } from "express";

import { getRepository } from "../services/github.service.js";

export async function getRepositoryController(
  req: Request,
  res: Response,
) {
  const installationId = Number(
    process.env.GITHUB_INSTALLATION_ID,
  );

  const { owner, repo } = req.params;

  if (!installationId) {
    return res.status(500).json({
      message: "GITHUB_INSTALLATION_ID is not configured",
    });
  }

  const repository = await getRepository(
    installationId,
    owner,
    repo,
  );

  return res.json({
    id: repository.id,
    name: repository.name,
    fullName: repository.full_name,
    private: repository.private,
  });
}