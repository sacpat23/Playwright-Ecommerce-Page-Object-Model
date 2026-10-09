import { test, expect, Locator, Page } from '@playwright/test';

export class OrderPage {

          dropDownCount: Locator;
          submitButton: Locator;
          dd: Locator;
          typeCountry: Locator;
          selectCountry: Locator;
          wait: Locator;
          page: Page;

  constructor(page:Page) {
      this.page = page;
      this.wait = page.locator("form");
      this.selectCountry = page.getByPlaceholder("Select Country");
      this.typeCountry = page.getByPlaceholder("Select Country");
      this.dd = page.locator(".ta-results");
      this.dropDownCount =this.dd.locator("button");
      this.submitButton= page.locator(".action__submit");
    }

    async orderVerify() {
       await this.wait.waitFor();
       const spinner = this.page.locator('.ngx-spinner-overlay');
       if (await spinner.count()) {
         await spinner.first().waitFor({ state: 'hidden', timeout: 60000 }).catch(() => {});
       }
       await this.selectCountry.waitFor({ state: 'visible', timeout: 60000 });
       await this.selectCountry.click({ force: true });
       await this.typeCountry.pressSequentially("ind", { delay: 150 });

       // const dropdown =this.page.locator(".ta-results");
        await this.dd.waitFor();

       // const optionsCount = await this.dropdown.locator("button").count();
        const optionsCount = await this.dropDownCount.count();
        for (let i = 0; i < optionsCount; ++i) {
        const option = this.dd.locator("button").nth(i);
        const text = await option.textContent();
        console.log(text);
        if (text === " India") {
        await option.evaluate((element) => {
          element.scrollIntoView({ behavior: 'instant', block: 'center' });
          element.click();
        });
        break;
        }
        }
    }
    
   async  navigateToThankyouPage() {

           const spinner = this.page.locator('.ngx-spinner-overlay');
           if (await spinner.count()) {
             await spinner.first().waitFor({ state: 'hidden', timeout: 60000 }).catch(() => {});
           }
           await this.submitButton.waitFor({ state: 'visible', timeout: 60000 });
           await this.submitButton.click({ force: true });
        }
}


