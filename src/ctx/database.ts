import { Elysia } from "elysia";
import { drizzleClient } from "~/db";

export const db = new Elysia({ name: "@[database]" }).decorate(
  "db",
  drizzleClient
);
