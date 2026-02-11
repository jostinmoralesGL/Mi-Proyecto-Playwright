import { test, expect } from '@playwright/test';

test('Validar texto en la página', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/abtest');

  const heading = page.locator('h3');
  await expect(heading).toHaveText('A/B Test Control');
  
  // Pause the page after assertion for inspection
  await page.pause();
});
