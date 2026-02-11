import { test, expect } from '@playwright/test';

const URL = 'https://practice.expandtesting.com/login';
const VALID_USER = 'practice';
const VALID_PASS = 'SuperSecretPassword!';

test('Successful login', async ({ page }) => {
  await page.goto(URL);

  await page.fill('#username', VALID_USER);
  await page.fill('#password', VALID_PASS);
  await page.click('button[type="submit"]');

  // Assert success message
  await expect(page.locator('.alert-success')).toHaveText(
    /You logged into a secure area!/i
  );
});