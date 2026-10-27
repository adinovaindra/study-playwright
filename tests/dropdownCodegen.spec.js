import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');
  await page.locator('#hobbies').selectOption('Playing');
  await page.locator('#hobbies').selectOption(['Playing', 'Reading']);
  await page.locator('#hobbies').selectOption(['Playing', 'Reading', 'Swimming']);
});