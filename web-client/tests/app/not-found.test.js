const { test, expect } = require("@playwright/test");

test('should display "404" error message', async ({ page }) => {
  await page.goto("http://localhost:3000/not-found");
  await expect(page.locator("text=404")).toBeVisible();
});

test('should display "Página não encontrada" subtitle', async ({ page }) => {
  await page.goto("http://localhost:3000/not-found");
  await expect(page.locator("text=Página não encontrada")).toBeVisible();
});

test("should have a link to the home page", async ({ page }) => {
  await page.goto("http://localhost:3000/not-found");
  await expect(page.locator("text=Ir para a home")).toBeVisible();
});

test("should have a link to the home page with the correct href", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/not-found");
  const link = await page.locator("text=Ir para a home");
  const href = await link.evaluate((el) => el.getAttribute("href"));
  await expect(href).toBe("/");
});
