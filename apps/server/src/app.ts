import cors from "cors";
import express from "express";

import githubRoutes from "./routes/github.routes.js";

const app = express();

app.use(cors());
app.use(
  "/api/github/webhook",
  express.raw({ type: "application/json" }),
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    database: "connected",
  });
});

app.use("/api/github", githubRoutes);

export default app;