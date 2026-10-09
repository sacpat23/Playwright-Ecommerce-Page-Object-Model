import { chromium, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const authDir = path.join(process.cwd(), '.auth');
const authFile = path.join(authDir, 'user.json');

async function globalSetup() {
  const username = process.env.ECOM_USERNAME;
  const password = process.env.ECOM_PASSWORD;

  if (!username || !password) {
    throw new Error('Set ECOM_USERNAME and ECOM_PASSWORD in the project .env file before running Playwright.');
  }

  fs.mkdirSync(authDir, { recursive: true });

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator('#userEmail').fill(username);
  await page.locator('#userPassword').fill(password);
  await page.locator('#login').click();

  await page.waitForLoadState('networkidle');
  await page.locator('.card-body').first().waitFor();

  await context.storageState({ path: authFile });
  await browser.close();

  console.log(`Storage state saved to: ${authFile}`);
}

export default globalSetup;
