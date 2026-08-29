import { Router } from "express";

import {
  getRepositoryController,
} from "../controllers/github.controller.js";

const router = Router();

router.get(
  "/repositories/:owner/:repo",
  getRepositoryController,
);

export default router;