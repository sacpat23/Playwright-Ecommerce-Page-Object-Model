import { test, expect } from '../fixtures/ecomFixtures';

test('@smoke user can sign in and view products', async ({ authenticatedPage }) => {
  await expect(authenticatedPage.locator('.card-body').first()).toBeVisible();
});
