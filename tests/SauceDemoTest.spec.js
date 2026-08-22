import { test } from '@playwright/test';
import env from '../env/env.config.js';

test("@Regression End To End Flow", async ({ page }) =>{
    await page.goto(env.BASE_URL);

    await page.locator("#user-name").fill(env.USERNAME);
    await page.locator("#password").fill(env.PASSWORD);

    

    await page.locator("#login-button").click();

    

    await page.locator(".product_sort_container").selectOption({label : 'Price (high to low)'});

    

    await page.locator("button[name='add-to-cart-sauce-labs-fleece-jacket']").click();

    

    // used to locate Single element in HTML DOM Structure
   // const container = await page.$("//span[@class='shopping_cart_badge']");
   // await container.click();

    

    console.log("@Regression Group test cases");
});

test("@Sanity Group test cases", async ({page}) => {
    console.log("@Sanity Group test cases");
    console.log("@Sanity Group test cases");
    console.log("@Sanity Group test cases");
    console.log("@Sanity Group test cases");
    console.log("@Sanity Group test cases");
});

test("@e2e Group test cases", async ({page}) => {
    console.log("@e2e Group test cases");
    console.log("@e2e Group test cases");
    console.log("@e2e Group test cases");
    console.log("@e2e Group test cases");
    console.log("@e2e Group test cases");
});

test("@Smoke Group test cases", async ({page}) => {
    console.log("@Smoke Group test cases");
    console.log("@Smoke Group test cases");
    console.log("@Smoke Group test cases");
    console.log("@Smoke Group test cases");
    console.log("@Smoke Group test cases");
});