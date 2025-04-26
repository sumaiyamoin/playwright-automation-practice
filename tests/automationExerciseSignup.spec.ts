import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';
import { Signup } from "../pages/signup";



test("Sign up", async ({ page }) => {
    await page.goto('https://www.automationexercise.com/');
    await expect(page.getByRole('heading', { name: "AutomationExercise" })).toHaveText("AutomationExercise");

    const user = new Signup(page);
    await user.registration(faker.person.firstName(), faker.internet.email())


    // await page.getByText('Signup').click();
    // await page.getByRole('textbox', { name: 'Name' }).fill("Test User");
    // await page.locator('[name=email]').nth(1).fill(faker.internet.email());
    // await page.getByRole('button', { name: 'Signup' }).click();
    // await page.getByRole('radio', { name: 'Mrs.' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('testuser123');
    // await page.locator('#days').nth(0).click();
    // await page.keyboard.press("ArrowDown");
    // await page.keyboard.press("Enter");
    // await page.locator('#months').nth(0).click();
    // await page.keyboard.press("ArrowDown");
    // await page.keyboard.press("Enter");
    // await page.locator('#years').nth(0).click();
    // await page.keyboard.press("ArrowDown");
    // await page.keyboard.press("Enter");
    // await page.getByRole('checkbox', { name: "Sign up for our newsletter!" }).click();
    // await page.getByRole('textbox', { name: 'First name' }).fill("Test");
    // await page.getByRole('textbox', { name: 'Last name' }).fill("User");
    // await page.getByRole('textbox', { name: "Address * (Street address, P.O. Box, Company name, etc.)" }).fill("Mogbazar, Dhaka");
    // await page.getByRole('combobox', { name: "Country *" }).click();
    // await page.keyboard.press("ArrowDown");
    // await page.keyboard.press("Enter");
    // await page.getByRole('textbox', { name: "State *" }).fill("England");
    // await page.getByRole('textbox', { name: "City * Zipcode *" }).fill("London");
    // await page.locator('#zipcode').fill('48');

    // await page.getByRole('textbox', { name: "Mobile Number *" }).fill("88000008467");
    // await page.getByRole('button', { name: "Create Account" }).click();
    // expect(page.getByRole('heading', { name: "ACCOUNT CREATED" })).toHaveText("Account Created!");
    // await page.getByRole('link',{name:"Continue"}).click();
    // await page.getByText("Continue").click();
    await page.pause();


})