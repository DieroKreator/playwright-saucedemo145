const { test, expect } = require('@playwright/test')

test('Fluxo de compra da mochila', async ({ page }) => {

    const tituloSecao = page.locator('span.title')
    const tituloSecao2 = page.locator('#back-to-products')
    const tituloSecao3 = page.locator('span.title')
    const tituloSecao4 = page.locator('span.title')
    const tituloProduto = page.locator('div.inventory_details_name.large_size')
    const tituloProdutoCarrinho = page.locator('div.inventory_item_name')
    const precoProduto = page.locator('.inventory_details_price')
    const badgeQuantity = page.locator('span.shopping_cart_badge')
    const btnCheckout = page.getByRole('button', { name: 'Checkout' })
    const txtFieldFirstName = page.getByPlaceholder('First Name')
    const txtFieldLastName = page.getByPlaceholder('Last Name')
    const txtFieldPostalCode = page.getByPlaceholder('Zip/Postal Code')
    const btnContinue = page.getByRole('button', { name: 'Continue' })
    const btnFinish = page.getByRole('button', { name: 'Finish' })
    const successMessageTxt = page.locator('h2.complete-header')
    let expectedProductText = 'Sauce Labs Backpack'
    let expectedProductPrice = '$29.99'
    let expectedBadgeNumber = '1'
    let expectedSuccessMessage = 'Thank you for your order!'

    await page.goto('https://www.saucedemo.com/')
    await page.fill('#user-name', 'standard_user')
    await page.fill('[name="password"]', 'secret_sauce')
    await page.click('input.submit-button.btn_action')

    await expect(page).toHaveURL(/.*inventory/)
    // const tituloSecao = page.locator('span.title')
    await expect(tituloSecao).toHaveText('Products')

    await page.click('#item_4_title_link')

    /* Inventory Item Page */
    await expect(page).toHaveURL(/.*inventory-item/)
    // const tituloSecao2 = page.locator('#back-to-products')
    await expect(tituloSecao2).toBeVisible()
    await expect(tituloSecao2).toHaveText('Back to products')

    // const tituloProduto = page.locator('div.inventory_details_name.large_size')
    await expect(tituloProduto).toHaveText(expectedProductText)

    // const precoProduto = page.locator('.inventory_details_price')
    await expect(precoProduto).toHaveText(expectedProductPrice)

    await page.click('button.btn_primary')
    await expect(badgeQuantity).toHaveText(expectedBadgeNumber)

    await page.click('a.shopping_cart_link')

    /* Shopping Cart Page */
    await expect(page).toHaveURL(/.*cart/)
    // const tituloSecao3 = page.locator('span.title')
    await expect(tituloSecao3).toHaveText('Your Cart')
    await expect(tituloProdutoCarrinho).toHaveText(expectedProductText)
    await expect(page.locator('.inventory_item_price')).toHaveText(expectedProductPrice)
    await expect(badgeQuantity).toHaveText(expectedBadgeNumber)
    await btnCheckout.click()

    /* CheckoutStep1 Page */
    await expect(page).toHaveURL(/.*checkout-step-one/)
    await expect(tituloSecao4).toHaveText('Checkout: Your Information')
    await txtFieldFirstName.fill('Peter')
    await txtFieldLastName.fill('Laudrick')
    await txtFieldPostalCode.fill('00000')
    await btnContinue.click()

    /* CheckoutStep2 Page */
    await expect(page).toHaveURL(/.*checkout-step-two/)
    await expect(tituloSecao4).toHaveText('Checkout: Overview')
    await expect(tituloProdutoCarrinho).toHaveText(expectedProductText)
    await expect(page.locator('.inventory_item_price')).toHaveText(expectedProductPrice)
    await expect(badgeQuantity).toHaveText(expectedBadgeNumber)
    await btnFinish.click()

    /* CheckoutComplete Page */
    await expect(page).toHaveURL(/.*checkout-complete/)
    await expect(tituloSecao4).toHaveText('Checkout: Complete!')
    await expect(successMessageTxt).toHaveText(expectedSuccessMessage)
}
);