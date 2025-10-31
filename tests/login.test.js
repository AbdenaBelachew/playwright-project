const { test } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { DashboardPage } = require("../pages/DashboardPage");
const { testUser } = require("../utils/testData");

test("Login Test using POM", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate();
  await loginPage.enterCredentials(testUser.username, testUser.password);
  await loginPage.clickLogin();

  await dashboardPage.verifyDashboardPage();
});
