import { Page, test} from "@playwright/test";
import path from "path";

test('Registration form fill up',async ({page})=> {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByRole('textbox', {name: "First Name"}).fill('Test');
    await page.getByRole('textbox',{name: "Last Name"}).fill('User');
    await page.getByRole('textbox',{name:"name@example.com"}).fill('test@yopmail.com');
    await page.getByText('Female').click();
    
    await page.getByRole('textbox',{name:"Mobile Number"}).fill('01711234567');

    await page.locator('#dateOfBirthInput');
    await page.keyboard.press('Control+A');
    await page.keyboard.type('30 Apr 2025');

    //await page.locator('div').filter({ hasText: /^Sports$/ }).click();
    await page.getByText("Reading").click();

    await page.getByRole('button',{name: "Select picture"}).setInputFiles(path.join(__dirname,'../uploads/1.png'));

    await page.getByRole('textbox',{name:"Current Address"}).fill('Mogbazar, Dhaka');

    await page.getByText("Select State").click();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

    await page.getByText("Select City").click();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

    await page.getByRole('button',{name: 'Submit'}).click();

    await page.pause();
})