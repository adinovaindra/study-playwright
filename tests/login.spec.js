import { test, expect } from "@playwright/test";

test("Valid login", async ({ page }) => {
  const url =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });
  await page.getByPlaceholder("Username").pressSequentially("Admin", {
    delay: 200,
  });
  // await page.getByPlaceholder("Password").fill("admin123")

  await page.locator("input[name='password']").pressSequentially("admin123", {
    delay: 200
  });

  await page.locator("button").filter({ hasText: "Login" }).click();

  await page.locator(".oxd-userdropdown-img").click();

  await page.getByText("Logout").click();

  await expect(page).toHaveURL(/login/);
});
