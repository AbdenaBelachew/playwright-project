// playwright.config.js
import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 120000,
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: "html",
});
