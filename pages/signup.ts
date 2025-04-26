import { Page } from 'playwright';
class Signup {
        private page: Page;
        constructor(page: Page) {
                this.page = page;
        }
        async registration(name: string, email: string) {
                await this.page.getByText('Signup').click();
                await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
                await this.page.locator('[name=email]').nth(1).fill(email);
                await this.page.getByRole('button', { name: 'Signup' }).click();
                await this.page.getByRole('radio', { name: 'Mrs.' }).click();
                await this.page.getByRole('textbox', { name: 'Password' }).fill('testuser123');
                await this.page.locator('#days').nth(0).click();
                await this.page.keyboard.press("ArrowDown");
                await this.page.keyboard.press("Enter");
                await this.page.locator('#months').nth(0).click();
                await this.page.keyboard.press("ArrowDown");
                await this.page.keyboard.press("Enter");
                await this.page.locator('#years').nth(0).click();
                await this.page.keyboard.press("ArrowDown");
                await this.page.keyboard.press("Enter");
                await this.page.getByRole('checkbox', { name: "Sign up for our newsletter!" }).click();
                await this.page.getByRole('textbox', { name: 'First name' }).fill("Test");
                await this.page.getByRole('textbox', { name: 'Last name' }).fill("User");
                await this.page.getByRole('textbox', { name: "Address * (Street address, P.O. Box, Company name, etc.)" }).fill("Mogbazar, Dhaka");
                await this.page.getByRole('combobox', { name: "Country *" }).click();
                await this.page.keyboard.press("ArrowDown");
                await this.page.keyboard.press("Enter");
                await this.page.getByRole('textbox', { name: "State *" }).fill("England");
                await this.page.getByRole('textbox', { name: "City * Zipcode *" }).fill("London");
                await this.page.locator('#zipcode').fill('48');
                await this.page.getByRole('textbox', { name: "Mobile Number *" }).fill("88000008467");
                await this.page.getByRole('button', { name: "Create Account" }).click();
                await this.page.getByText("Continue").click();
        }
}

export { Signup }