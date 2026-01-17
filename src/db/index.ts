import { Elysia } from "elysia";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";
import { env } from "cloudflare:workers";
import * as schema from "~/db/schema";

const client = createClient({
  url: env.DATABASE_URL!,
  authToken: env.DATABASE_AUTH_TOKEN!,
});

export const drizzleClient = drizzle(client, {
  schema,
});
