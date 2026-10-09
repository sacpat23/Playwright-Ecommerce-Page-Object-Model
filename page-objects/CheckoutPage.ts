import { expect, Locator, Page } from '@playwright/test';


export class CheckoutPage {
    checkout: Locator;
    page: Page;
    



    constructor(page: Page) {
        this.page = page;
        this.checkout = page.locator("button:has-text('Checkout')").first();
    }
    
   /* async verifyCart() {

    await this.waitOnPage.waitFor();
    const bool = await this.productInCart.isVisible();
    //expect(bool).toBeTruthy();
    }
    */

   async verifyCart(productName: string) {
       await expect(this.getProductLocator(productName)).toBeVisible();
    }


    async navigateToOrder() {

    await this.checkout.waitFor({ state: 'visible', timeout: 60000 });
    await this.checkout.evaluate((element) => {
        element.scrollIntoView({ behavior: 'instant', block: 'center' });
        element.click();
    });
   // console.log(page.title());

    }
    getProductLocator(productName: string) { 

        return this.page.getByText(productName, { exact: true }).first();
    }

}


