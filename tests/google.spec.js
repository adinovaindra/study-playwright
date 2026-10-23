import { test, expect } from "@playwright/test";

test("Verify Application Title", async ({page}) => {
    const baseUrl = "https://google.com"
    await page.goto(baseUrl)

    const url = await page.url()

    console.log(`Url is ${url}`)
    

    const title = await page.title()

    console.log(`Title is ${title}`);

    await expect(page).toHaveTitle("Google")
})