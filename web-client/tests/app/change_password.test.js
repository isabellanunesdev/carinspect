import { test, expect } from "@playwright/test";
import { assert } from "console";

test("should load the page correctly", async ({ page }) => {
  await page.goto("http://localhost:3000/change_password");

  await expect(page.locator("text=Car Inspect")).toBeVisible();
  await expect(page.locator("text=Crie uma nova senha")).toBeVisible();
  await expect(page.locator('input[type="password"]')).toHaveCount(2);
  await expect(page.locator("text=Redefinir senha")).toBeVisible();
});

test("should allow entering passwords and clicking the reset button", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/change_password");
  await page.fill('input[placeholder="Digite sua nova senha"]', "password123");
  await page.fill('input[placeholder="Repita a nova senha"]', "password123");
  await page.click("text=Redefinir senha");
});

test("should validate password fields", async ({ page }) => {
  await page.goto("http://localhost:3000/change_password");
  await page.fill('input[placeholder="Digite sua nova senha"]', "password123");
  await page.click("text=Redefinir senha");
});
