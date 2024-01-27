import { test } from "@playwright/test";

test("Go to /recover_password when click on Esqueceu sua senha", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Esqueceu sua senha?");
  await page.goto("http://localhost:3000/recover_password");
});

test("Go to /register when click on Não tem conta?", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Não tem conta?");
  await page.goto("http://localhost:3000/register");
});
