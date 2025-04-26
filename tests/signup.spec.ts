import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {generateRandomNumber} from '../utils/utils'

test('User registers a form', async ({ page }) => {
  await page.goto('https://dailyfinance.roadtocareer.net/register');
  await page.getByRole("textbox",{name:"First Name"}).fill("Playwright User")
  await page.getByRole("textbox",{name:"Email"}).fill(faker.internet.email().toLocaleLowerCase())
  await page.getByRole("textbox",{name:"Password"}).fill("1234")
  await page.getByRole("textbox",{name:"Phone Number"}).fill("0160"+generateRandomNumber(1000000,9999999))
  await page.getByRole("radio").nth(1).click();
  await page.getByRole("checkbox").click();
  await page.pause();
});