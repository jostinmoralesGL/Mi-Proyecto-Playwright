import { test, expect } from '@playwright/test';

test('login exitoso', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.fill('#username', 'practice');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('.alert-success')).toContainText('You logged into a secure area!');
});

test('login fallido', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');
  await page.fill('#username', 'practice');
  await page.fill('#password', 'WrongPassword');
  await page.click('button[type="submit"]');
  await expect(page.locator('.alert-danger')).toContainText('Your password is invalid!');
});