import "dotenv/config";
import { z } from "zod";

function optionalString() {
  return z
    .string()
    .optional()
    .transform((value) => {
      const trimmed = value?.trim();
      return trimmed ? trimmed : undefined;
    });
}

function optionalNumber() {
  return z
    .string()
    .optional()
    .transform((value) => {
      const trimmed = value?.trim();
      if (!trimmed) {
        return undefined;
      }

      const parsed = Number(trimmed);
      return Number.isFinite(parsed) ? parsed : undefined;
    });
}

function requiredString(name: string) {
  return z
    .string()
    .transform((value) => value.trim())
    .pipe(z.string().min(1, `${name} is required`));
}

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),

  DATABASE_URL: requiredString("DATABASE_URL"),

  GITHUB_APP_ID: optionalNumber(),
  GITHUB_PRIVATE_KEY: optionalString(),
  GITHUB_WEBHOOK_SECRET: optionalString(),
  GITHUB_INSTALLATION_ID: optionalNumber(),

  OPENAI_API_KEY: optionalString(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment variables:");
  console.error(z.prettifyError(parsed.error));
  process.exit(1);
}

export const env = parsed.data;

export function isGithubConfigured(): boolean {
  return Boolean(
    env.GITHUB_APP_ID &&
      env.GITHUB_PRIVATE_KEY &&
      env.GITHUB_WEBHOOK_SECRET,
  );
}
