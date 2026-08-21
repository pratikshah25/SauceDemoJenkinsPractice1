import { test } from '@playwright/test';

test("@Regression End To End Flow", async ({ page }) =>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");

    await page.waitForTimeout(3000);

    await page.locator("#login-button").click();

    await page.waitForTimeout(7000);

    await page.locator(".product_sort_container").selectOption({label : 'Price (high to low)'});

    await page.waitForTimeout(3000);

    await page.locator("button[name='add-to-cart-sauce-labs-fleece-jacket']").click();

    await page.waitForTimeout(3000);

    // used to locate Single element in HTML DOM Structure
    const container = await page.$("//span[@class='shopping_cart_badge']");
    await container.click();

    await page.waitForTimeout(3000);
});