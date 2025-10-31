const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "#login-button";
  }

  async navigate() {
    await this.page.goto("https://example.com/login");
  }

  async enterCredentials(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }
}

module.exports = { LoginPage };
