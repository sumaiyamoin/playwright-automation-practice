import { Page } from 'playwright';
class Signup {
        private page: Page;
        constructor(page: Page) {
                this.page = page;
        }
        registration(name:string, email:string) {
                this.page.getByText('Signup').click();
                this.page.getByRole('textbox', { name: 'Name' }).fill(name);
                this.page.getByRole('textbox', { name: 'Email Address'}).fill(email);
                //this.// page.getByRole('textbox',{name:"Email Address"}).fill("testuser005@yopmail.com");
                this.page.getByRole('button', { name: 'Signup' }).click();
                this.page.getByRole('radio', { name: 'Mrs.' }).click();
                this.page.getByRole('textbox', { name: 'Password' }).fill('testuser123');
                //this.// page.getByRole('combobox',{value:'Day'}).click();
                //this.// page.getByText("Day").click();
                this.page.locator('#days').nth(0).click();
                this.page.keyboard.press("ArrowDown");
                this.page.keyboard.press("Enter");
                this.page.locator('#months').nth(0).click();
                this.page.keyboard.press("ArrowDown");
                this.page.keyboard.press("Enter");
                this.page.locator('#years').nth(0).click();
                this.page.keyboard.press("ArrowDown");
                this.page.keyboard.press("Enter");
                this.page.getByRole('checkbox', { name: "Sign up for our newsletter!" }).click();
                this.page.getByRole('textbox', { name: 'First name' }).fill("Test");
                this.page.getByRole('textbox', { name: 'Last name' }).fill("User");
                this.page.getByRole('textbox', { name: "Address * (Street address, P.O. Box, Company name, etc.)" }).fill("Mogbazar, Dhaka");
                this.page.getByRole('combobox', { name: "Country *" }).click();
                this.page.keyboard.press("ArrowDown");
                this.page.keyboard.press("Enter");
                this.page.getByRole('textbox', { name: "State *" }).fill("England");
                this.page.getByRole('textbox', { name: "City * Zipcode *" }).fill("London");
                this.page.locator('#zipcode').fill('48');

                this.page.getByRole('textbox', { name: "Mobile Number *" }).fill("88000008467");
                this.page.getByRole('button', { name: "Create Account" }).click();
                //expect(page.getByRole('heading', { name: "ACCOUNT CREATED" })).toHaveText("Account Created!");
                //this.// page.getByRole('link',{name:"Continue"}).click();
                this.page.getByText("Continue").click();
        }
}

export {Signup}