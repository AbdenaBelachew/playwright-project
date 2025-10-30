const { expect } = require("@playwright/test");

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeader = "h1.dashboard-title";
  }

  async verifyDashboardPage() {
    await expect(this.page).toHaveURL(/.*dashboard/);
    await expect(this.page.locator(this.dashboardHeader)).toBeVisible();
  }
}

module.exports = { DashboardPage };
