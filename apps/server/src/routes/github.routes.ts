import { Router } from "express";

import {
  getRepositoryController,
} from "../controllers/github.controller.js";
import {
  handleWebhook,
} from "../controllers/webhook.controller.js";

const router = Router();

router.get(
  "/repositories/:owner/:repo",
  getRepositoryController,
);

router.post(
  "/webhook",
  handleWebhook,
);

export default router;