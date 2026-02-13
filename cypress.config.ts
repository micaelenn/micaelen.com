import { defineConfig } from "cypress";
import dotenv from "dotenv"
dotenv.config()

export default defineConfig({
  allowCypressEnv: true,
  e2e: {
    baseUrl: process.env.NEXT_PUBLIC_CY_TARGET_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
