import cors from "cors";
import express from "express";

import prisma from "./db/prisma.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      status: "ok",
      database: "connected",
    });
  } catch {
    res.status(500).json({
      status: "error",
      database: "disconnected",
    });
  }
});

export default app;