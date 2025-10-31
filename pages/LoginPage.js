export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginBtn = "#btn_login";
  }

  async navigate() {
    await this.page.goto("https://www.google.com/");
  }

  async enterCredentials(username, password) {
    await this.page.waitForSelector(this.usernameInput);
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginBtn);
  }
}
