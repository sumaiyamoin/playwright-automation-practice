import { chromium, expect, Locator, test, Browser } from "@playwright/test";

// test("Login test demo", async () =>{
//     const browser = await chromium.launch({
//         headless: false
//     });
    // const context = await browser.newContext();
    // const page = await context.newPage();

    //await page.goto("https://ecommerce-playground.lambdatest.io/");

    test('Login test', async ({ page }) => {
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emialID:Locator = await page.locator('#input-email'); // used id of emailId
    const pass:Locator = await page.locator('#input-password');
    const loginButton = await page.locator("[value= 'Login']");

    emialID.fill("pwtest@opencart.com");
    pass.fill("playwright@123");
    loginButton.click();

    const title = await page.title();
    console.log("Home page title: ", title);

    await page.screenshot({path: 'homepage.png'});

    expect (title).toEqual('My Account');
    
    //browser.close();

  });
    

// })