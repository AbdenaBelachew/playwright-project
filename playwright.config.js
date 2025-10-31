import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 120000,
  use: {
    headless: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    proxy: {
      server: "http://proxy.company.com:8080", // change this to your proxy
    },
  },
});
