import { Request, Response } from "express";

import { env } from "../config/env.js";
import { getRepository } from "../services/github.service.js";

export async function getRepositoryController(
  req: Request,
  res: Response,
) {
  const installationId = env.GITHUB_INSTALLATION_ID;

  const owner = req.params.owner;
  const repo = req.params.repo;

  if (typeof owner !== "string" || typeof repo !== "string") {
    return res.status(400).json({
      message: "owner and repo are required",
    });
  }

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