export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginBtn = "#btn_login";
  }

  // async navigate() {
  //   await this.page.goto("https://www.google.com/");
  // }
  async navigate() {
    console.log("🌍 Navigating to URL...");
    await this.page.goto("https://www.google.com/", {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    console.log("✅ Page Loaded!");
  }

  async enterCredentials(username, password) {
    try {
      console.log("🔎 Waiting for username selector...");
      await this.page.waitForSelector(this.usernameInput, { timeout: 30000 });
    } catch (e) {
      console.log("❌ Selector not found. Capturing screenshot...");
      await this.page.screenshot({ path: "error.png" });
      throw e;
    }

    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginBtn);
  }
}
