import { test, expect } from "@playwright/test";

const baseURL = "https://freelance-learn-automation.vercel.app/signup";

test("Select values from dropdown", async ({ page }) => {
  await page.goto(baseURL);

  // await page.locator("#state").selectOption({label: "Goa"})
  // await page.waitForTimeout(5000)

  // await page.locator("#state").selectOption({value: "Gujarat"})
  // await page.waitForTimeout(5000)

  await page.locator("#state").selectOption({ index: 3 });
  await page.waitForTimeout(3000);

  let elements = await page.locator("#state option").allTextContents();

  let ddStatus = false;
  for (const element of elements) {
    console.log(element);
    if (element.includes("Rajasthan")) {
      ddStatus = true;
      break;
    }
  }

  expect(ddStatus).toBeTruthy();

  // select multiple dropdown

const hobby1 = "Playing"
const hobby2 = "Reading"
const hobby3 = "Swimming"


  const multipleValue = await page
    .locator("#hobbies")
    .selectOption([
      { label: "Playing" },
      { label: "Reading" },
      { label: "Swimming" },
    ]);
    await page.waitForTimeout(5000)

    expect(multipleValue).toEqual([hobby1, hobby2, hobby3])
    await expect(page.locator("#hobbies")).toHaveValues([hobby1, hobby2, hobby3])

});
