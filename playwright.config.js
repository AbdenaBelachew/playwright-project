module.exports = {
  timeout: 60000,
  retries: 1,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
  reporter: [["html", { open: "never" }]],
};
