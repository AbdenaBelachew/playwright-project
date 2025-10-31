import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login Test using POM", async ({ page }) => {
  const login = new LoginPage(page);

  await login.navigate(); // ✅ navigate added
  await login.enterCredentials("admin", "password");
  await login.clickLogin();
});
