const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/user_dashboard");
});

test('should display navbar with "Meus veículos" header', async ({ page }) => {
  await expect(page.locator("text=Meus veículos")).toBeVisible();
});
