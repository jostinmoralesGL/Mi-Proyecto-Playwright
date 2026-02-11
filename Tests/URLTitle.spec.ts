import { test, expect } from '@playwright/test';

test('Validar URL y título', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');

  // Get and display actual URL
  const actualURL = page.url();
  console.log('------- URL TEST -------');
  console.log(`Actual URL: ${actualURL}`);
  await expect(page).toHaveURL(/herokuapp/);
  console.log('✓ URL Assertion PASSED - URL contains "herokuapp"');
  console.log('------------------------\n');
  
  // Get and display actual title
  const actualTitle = await page.title();
  console.log('------- TITLE TEST -------');
  console.log(`Actual Page Title: ${actualTitle}`);
  await expect(page).toHaveTitle('The Internet');
  console.log('✓ Title Assertion PASSED - Title matches "The Internet"');
  console.log('--------------------------\n');
  
  console.log('===== ALL TESTS PASSED =====\n');
  
  // Pause the page for inspection
  console.log('Pausing page for inspection. Use the Playwright Inspector to continue...');
  await page.pause();
  
  console.log('Test completed');
});
