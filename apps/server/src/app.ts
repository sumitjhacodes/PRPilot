import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "PRPilot-api",
  });
});

export default app;