import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    url: "./electron-starter-dev.db",
  },
  dialect: "sqlite",
  out: "./drizzle",
  schema: [""],
});
