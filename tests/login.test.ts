import { test, expect, type Page } from "@playwright/test";

test.describe(" an API call", () => {
  test("login", async ({ page }) => {
    await page.goto("https://lovethework.com");

    await page.getByRole('button', { name: 'Accept All' }).click({ force: true });

    
  });
});
