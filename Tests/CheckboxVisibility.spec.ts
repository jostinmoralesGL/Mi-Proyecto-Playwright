import { test, expect } from '@playwright/test';

test('Validar checkbox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox = page.locator('input[type="checkbox"]').first();

  // Assertion 1: Verify checkbox is initially unchecked
  await expect(checkbox).not.toBeChecked();
  test.info().annotations.push({
    type: 'Checkbox Status',
    description: 'Initial State: UNCHECKED ✓'
  });
  console.log('✓ Assertion 1 PASSED: Checkbox is UNCHECKED (Initial state)');
  
  // Check the checkbox
  await checkbox.check();
  
  // Assertion 2: Verify checkbox is now checked
  await expect(checkbox).toBeChecked();
  test.info().annotations.push({
    type: 'Checkbox Status',
    description: 'After Check: CHECKED ✓'
  });
  console.log('✓ Assertion 2 PASSED: Checkbox is CHECKED (After clicking check)');
  
  // Skip pause and proceed to report
  console.log('Test completed. Opening HTML report...');
});

test.afterAll(async ({ browser }) => {
  // Automatically open HTML report after all tests complete without waiting
  const { execSync } = require('child_process');
  try {
    console.log('Opening Playwright HTML report...');
    execSync('npx playwright show-report', { stdio: 'inherit' });
  } catch (error) {
    console.log('Report display completed');
  }
});