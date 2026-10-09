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

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.locator('#userEmail').waitFor({ state: 'visible', timeout: 60000 });
  await page.locator('#userEmail').fill(username);
  await page.locator('#userPassword').fill(password);
  await page.locator('#login').click();

  await page.waitForLoadState('networkidle', { timeout: 60000 });
  await page.locator('.card-body').first().waitFor({ state: 'visible', timeout: 60000 });

  await context.storageState({ path: authFile });
  await browser.close();

  console.log(`Storage state saved to: ${authFile}`);
}

export default globalSetup;
