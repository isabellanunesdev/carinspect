const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/register");
});

test('should display "Car Inspect" logo', async ({ page }) => {
  await expect(page.locator("text=Car Inspect")).toBeVisible();
});

test("should display subtitle with correct text", async ({ page }) => {
  await expect(
    page.locator(
      "text=Cadastre-se e receba diversas ofertas de seguro para seus veículos"
    )
  ).toBeVisible();
});

test('should display input fields and "Começar" button', async ({ page }) => {
  await expect(page.locator('input[type="text"]')).toHaveCount(3);
  await expect(page.locator('input[type="email"]')).toHaveCount(1);
  await expect(page.locator('input[type="password"]')).toHaveCount(1);
  await expect(page.getByRole("button", { name: "Começar" })).toHaveCount(1);
});

test("should have a valid form submission", async ({ page }) => {
  await page.fill('input[placeholder="Nome"]', "John Doe");
  await page.fill('input[placeholder="E-mail"]', "johndoe@gmail.com");
  await page.fill('input[placeholder="CPF"]', "12345678901");
  await page.fill('input[placeholder="Telefone"]', "1234567890");
  await page.fill('input[placeholder="Senha"]', "password123");
  await page.click("text=Começar");
});
