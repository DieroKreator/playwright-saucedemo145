import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByText('Swag Labs').click();
    await expect(page.locator('#root')).toContainText('Swag Labs');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="title"]').click();
    await page.locator('[data-test="title"]').click();
    await page.locator('[data-test="title"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await page.locator('[data-test="item-1-title-link"]').click();
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
    await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$15.99');
    await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
    await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$15.99');
    await page.locator('[data-test="add-to-cart"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
    await expect(page.locator('[data-test="inventory-container"]')).toMatchAriaSnapshot(`
    - img "Sauce Labs Bolt T-Shirt"
    - text: /Sauce Labs Bolt T-Shirt Get your testing superhero on with the Sauce Labs bolt T-shirt\\. From American Apparel, \\d+% ringspun combed cotton, heather gray with red bolt\\. \\$\\d+\\.\\d+/
    - button "Remove"
    `);
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Your Cart');
    await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
    await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
    await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$15.99');
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Peter');
    await page.locator('[data-test="firstName"]').press('Tab');
    await page.locator('[data-test="lastName"]').fill('Jackson');
    await page.locator('[data-test="lastName"]').press('Tab');
    await page.locator('[data-test="postalCode"]').fill('9123435');
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');
    await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
    await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
    await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$15.99');
    await page.locator('[data-test="item-quantity"]').click();
    await expect(page.locator('[data-test="item-quantity"]')).toContainText('1');
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
    await expect(page.locator('[data-test="payment-info-value"]')).toContainText('SauceCard #31337');
    await expect(page.locator('[data-test="shipping-info-value"]')).toContainText('Free Pony Express Delivery!');
    await expect(page.locator('[data-test="subtotal-label"]')).toContainText('Item total: $15.99');
    await expect(page.locator('[data-test="tax-label"]')).toContainText('Tax: $1.28');
    await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $17.27');
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="reset-sidebar-link"]').click();
    await page.locator('[data-test="inventory-sidebar-link"]').click();
});