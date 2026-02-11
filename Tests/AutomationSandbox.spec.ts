import { test, expect } from '@playwright/test';
// import { SandboxPage } from '../Pages/SandboxPage';

test('Puedo seleccionar y deseleccionar un checkbox en el @Sandbox', async ({ page }) => {
 
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('https://www.freerangetesters.com/');
            })
            await test.step('Puedo seleccionar el checkbox para Pasta', async () => {
                // const sandbox = new SandboxPage(page);
                await page.getByLabel('Pasta 🍝').check();
                
                await expect(page.getByLabel('Pasta 🍝')).toBeChecked();
 
            })
 
            await test.step('Puedo deseleccionar el checkbox Pasta', async () => {
                await page.getByLabel('Pasta 🍝').uncheck();
 
                await expect(page.getByLabel('Pasta 🍝')).not.toBeChecked();
            })
 
        })