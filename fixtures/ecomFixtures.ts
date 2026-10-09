import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { DashboardPage } from '../page-objects/DashboardPage';
import { CheckoutPage } from '../page-objects/CheckoutPage';
import { OrderPage } from '../page-objects/OrderPage';
import { ThankyouPage } from '../page-objects/ThankyouPage';
import { MyorderPage } from '../page-objects/MyorderPage';

type EcomFixtures = {
  authenticatedPage: Page;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  checkoutPage: CheckoutPage;
  orderPage: OrderPage;
  thankyouPage: ThankyouPage;
  myOrderPage: MyorderPage;
};

export const test = base.extend<EcomFixtures>({
  authenticatedPage: async ({ page }, use) => {
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.locator('.card-body').first().waitFor({ state: 'visible', timeout: 60000 });
    await use(page);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  orderPage: async ({ page }, use) => {
    await use(new OrderPage(page));
  },

  thankyouPage: async ({ page }, use) => {
    await use(new ThankyouPage(page));
  },

  myOrderPage: async ({ page }, use) => {
    await use(new MyorderPage(page));
  },
});

export { expect };
