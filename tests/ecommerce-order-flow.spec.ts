//const { test, expect } = require("@playwright/test");

import dataset from '../Utills/placeorderTestData.json';
import { test, expect } from '../fixtures/ecomFixtures';

for (const data of dataset) {
  test(`@regression @web E Commerce app flow for products order ${data.productName}`, async ({ authenticatedPage, dashboardPage, checkoutPage, orderPage, thankyouPage, myOrderPage }) => {
    const page = authenticatedPage;

    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

    await checkoutPage.verifyCart(data.productName);
    await checkoutPage.navigateToOrder();

    await orderPage.orderVerify();
    await orderPage.navigateToThankyouPage();

    await thankyouPage.validateThankYouPage();
    const orderId = await thankyouPage.getOrderId();
    console.log('Order ID:', orderId);
    await thankyouPage.navigateToMyOrderPage();

    await myOrderPage.serachAndverifyOrder(orderId);
    await expect(page.locator('body')).toBeVisible();
  });
}
