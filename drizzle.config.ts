import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export default {
  driver: "pg",
  schema: "./lib/db/schema.ts" ,
  dbCredentials: {
    connectionString: process.env.NEXT_CONNECT_WITH_NEONDB!,
  },
} satisfies Config;

