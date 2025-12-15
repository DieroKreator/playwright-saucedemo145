const { test, expect } = require('@playwright/test');

test('Fluxo completo no SauceDemo', async ({ page }) => {

    // 1️⃣ Acessar site
    await page.goto('https://www.saucedemo.com/');

    // 2️⃣ Login com sucesso
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // 3️⃣ Verificar URL da página seguinte
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // 4️⃣ Verificar nome da seção (Products)
    const tituloSection = page.locator('.title');
    await expect(tituloSection).toHaveText('Products');

    // 5️⃣ Adicionar 1 item no carrinho
    await page.click('button[id="add-to-cart-sauce-labs-backpack"]');

    // 6️⃣ Verificar número 1 no ícone do carrinho
    const badge = page.locator('.shopping_cart_badge');
    await expect(badge).toHaveText('1');

    // 7️⃣ Clicar no carrinho
    await page.click('.shopping_cart_link');

    // 8️⃣ Verificar URL do carrinho
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    // 9️⃣ Verificar nome da seção Cart
    await expect(page.locator('.title')).toHaveText('Your Cart');

    // 🔟 Verificar quantidade do produto
    await expect(page.locator('.cart_quantity')).toHaveText('1');

    // 1️⃣1️⃣ Verificar título do produto
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    // 1️⃣2️⃣ Verificar preço
    await expect(page.locator('.inventory_item_price')).toHaveText('$29.99');
});