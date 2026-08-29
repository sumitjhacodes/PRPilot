import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),

  DATABASE_URL: z.string().min(1),

  GITHUB_APP_ID: z.string().min(1),
  GITHUB_PRIVATE_KEY: z.string().min(1),
  GITHUB_WEBHOOK_SECRET: z.string().min(1),

  OPENAI_API_KEY: z.string().optional(),
});

export const env = envSchema.parse(process.env);