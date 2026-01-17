import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".dev.vars" });

export default defineConfig({
  out: "drizzle/migrations",
  schema: "src/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    token: process.env.DATABASE_AUTH_TOKEN!,
  },
});
