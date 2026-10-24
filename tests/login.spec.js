import { test, expect } from "@playwright/test";

test.use({
  viewport: {
    width: 1080,
    height: 657,
  },
});

test("Valid login", async ({ page }) => {
  const url =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  console.log(page.viewportSize().width);

  console.log(page.viewportSize().height);

  await page.getByPlaceholder("Username").pressSequentially("Admin", {
    delay: 200,
  });
  // await page.getByPlaceholder("Password").fill("admin123")

  await page.locator("input[name='password']").pressSequentially("admin123", {
    delay: 200,
  });

  await page.locator("button").filter({ hasText: "Login" }).click();

  await page.locator(".oxd-userdropdown-tab").click();

  await page.getByText("Logout").click();

  await expect(page).toHaveURL(/login/);
});
