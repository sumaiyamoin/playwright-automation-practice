import { id_ID } from '@faker-js/faker';
import { test, expect, Browser } from 'playwright/test';
import * as path from 'path';

test('Student registration', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    // await page.getByRole("textbox", { name: "First Name" }).fill("Student");
    // await page.locator('#firstName').fill("Nazia")
    // await page.locator('.form-control').nth(1).fill("Moin")
    // await page.locator('input').nth(2).fill('naziamoin@test.com')
    // await page.getByText('Female', { exact: true }).click();
    // await page.locator('[placeholder="Mobile Number"]').fill("01785445788")

    // await page.locator('#dateOfBirthInput').click();
    // await page.keyboard.press('Control+A');
    // await page.keyboard.type('10 Apr 2025');
    // await page.keyboard.press('Enter');

    await page.getByText("Select State").click();
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.pause();

    await page.getByRole("textbox", { name: "Last Name" }).fill("User");

    await page.getByRole("textbox", { name: "name@example.com" }).fill("student@yopmail.com");
    await page.locator('div').filter({ hasText: /^Male$/ }).click();
    await page.getByRole("textbox", { name: "Mobile Number" }).fill("01711123456");


    await page.locator('div').filter({ hasText: /^Sports$/ }).click();
    await page.getByRole('button', { name: 'Select picture' }).setInputFiles(path.join(__dirname, '../uploads/1.png'));
    // await page.getByRole('button', { name: 'Select picture' }).setInputFiles('d:/pictures/1.png');

    //const element = await page.getByRole("textbox",{name: "Select picture"});

    // await page.evaluate(() => {
    //     window.scrollBy(0,400);
    // })

    // await page.getByTestId('uploadPicture').click(); // hoy ni
    //await page.click("id= 'uploadPicture'"); // hoy ni

    //    const upload = await page.locator('#Select picture');
    //    upload.setInputFiles("D:\\pictures\\2.8.24_10.48am.png");


    // if (element) {
    //   // Scroll the element into view
    //   await element.scrollIntoViewIfNeeded();
    // }
    // await selectButton.setInputFiles('D:/pictures/1.png');
    await page.getByRole("textbox", { name: "Current Address" }).fill("Mogbajar, Dhaka");
    //await page.getByRole("textbox",{name: "Submit"}).click();
    await page.pause();
})

test("select dropdown", async ({ page }) => {
    await page.goto("https://demoqa.com/select-menu")
    await page.selectOption('#oldSelectMenu', { label: 'Black' });
    await page.pause();
})

test("handle iFrame", async ({ page }) => {
    await page.goto('https://demoqa.com/frames')
    const iframeText = await page.frameLocator('#frame1').locator('#sampleHeading').textContent();
    console.log(iframeText)

})

test("handle alerts", async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
    await page.getByRole('button', { name: "Click me" }).first().click();
    await page.waitForTimeout(2000);
    //await page.on('dialog', dialog => dialog.accept());
    await page.pause();
})

test.only("scrap table data",async ({page})=>{
    await page.goto("https://demoqa.com/webtables")
    const tableData = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('.rt-tbody .rt-tr-group'));
    
        return rows.map(row => {
          const cells = row.querySelectorAll('.rt-td');
          if (cells.length === 0) return null; // Skip empty rows
    
          return {
            firstName: cells[0]?.innerText.trim(),
            lastName: cells[1]?.innerText.trim(),
            age: cells[2]?.innerText.trim(),
            email: cells[3]?.innerText.trim(),
            salary: cells[4]?.innerText.trim(),
            department: cells[5]?.innerText.trim(),
          };
        }).filter(item => item !== null);

        console.log(tableData)
    })
    
})
