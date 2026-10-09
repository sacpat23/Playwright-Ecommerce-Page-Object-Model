import { test, expect, Locator, Page } from '@playwright/test';

export class ThankyouPage {

  myOrderLink: Locator;
  orderID: any;
  thankYouMsg: Locator;
  page: Page;

  constructor(page:Page) {
    this.page = page;
    this.thankYouMsg = page.locator(".hero-primary");
    this.orderID = page.locator(".em-spacer-1 .ng-star-inserted").last();
    this.myOrderLink = page.locator("button[routerlink*='myorders']");
  }

  async validateThankYouPage() {
    const thank = await this.thankYouMsg.textContent();
    console.log(thank);

    const orderId = await this.orderID.textContent();
    console.log(orderId);
  }

  async navigateToMyOrderPage() {
    await this.myOrderLink.waitFor({ state: 'visible', timeout: 60000 });
    await this.myOrderLink.evaluate((element) => {
      element.scrollIntoView({ behavior: 'instant', block: 'center' });
      element.click();
    });
  }
  async getOrderId() {
    return (await this.orderID.textContent()).trim();
  }
}

