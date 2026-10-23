import { test, expect } from "@playwright/test";

test("Verify Error Message", async ({ page }) => {
  const baseURL =
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

  await page.goto(baseURL);
  await page
    .getByPlaceholder("Username", { exact: true })
    .pressSequentially("Admin", {
      delay: 200,
    });
  await page
    .getByPlaceholder("Password", { exact: true })
    .pressSequentially("admin124");

  await page.locator("button[type='submit']").click();

  const errorMessage = await page.getByText("Invalid credentials", { exact: true }).innerText();

  console.log(errorMessage)

  expect(errorMessage).toEqual("Invalid credentials");
});
