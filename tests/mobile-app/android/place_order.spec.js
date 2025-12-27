// This sample code supports WebdriverIO client >=7
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import { remote } from 'webdriverio'
import assert from 'assert'

async function main() {
    const caps = {
        "platformName": "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "emulator5554",
        "appium:deviceOrientation": "portrait",
        "appium:appPackage": "com.saucelabs.mydemoapp.android",
        "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
        "appium:automationName": "uiAutomator2",
        "browserName": "",
        "appium:connectHardwareKeyboard": "true",
        "appium:ensureWebviewsHavePages": true,
        "appium:nativeWebScreenshot": true,
        "appium:newCommandTimeout": 3600
    }
    const driver = await remote({
        protocol: "http",
        hostname: "127.0.0.1",
        port: 4723,
        path: "/",
        capabilities: caps
    });
    //Products screen
    let section_title_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV")
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    let actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "Products")
    let product_name = await driver.$("-android uiautomator:new UiSelector().text(\"Sauce Labs Backpack\")")
    assert.strictEqual(await product_name.getText(), "Sauce Labs Backpack")
    let product_price = await driver.$("-android uiautomator:new UiSelector().text(\"$ 29.99\")")
    assert.strictEqual(await product_price.getText(), "$ 29.99")
    const product_name_link = await driver.$("accessibility id:Sauce Labs Backpack")
    await product_name_link.click()
    //Product Details screen
    // section_title_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV")
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "Sauce Labs Backpack")
    product_price = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV")
    assert.strictEqual(await product_price.getText(), "$ 29.99")
    let product_color = await driver.$("accessibility id:Blue color")
    await product_color.click()
    assert.strictEqual(await product_color.getAttribute("content-desc"), "Blue color")
    const add_to_cart_btn = await driver.$("accessibility id:Tap to add product to cart")
    await add_to_cart_btn.click();
    const cart_icon_quantity = await driver.$("id:com.saucelabs.mydemoapp.android:id/cartTV")
    assert.strictEqual(await cart_icon_quantity.getText(), "1")
    const cart_btn = await driver.$("id:com.saucelabs.mydemoapp.android:id/cartIV")
    await cart_btn.click()
    //Cart screen
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "My Cart")
    product_name = await driver.$("id:com.saucelabs.mydemoapp.android:id/titleTV")
    assert.strictEqual(await product_name.getText(), "Sauce Labs Backpack")
    product_price = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV")
    assert.strictEqual(await product_price.getText(), "$ 29.99")
    product_color = await driver.$("accessibility id:Displays color of selected product")
    // assert.strictEqual(await product_color.getAttribute("elementId"), "00000000-0000-012e-ffff-ffff00000261") -> Dynamic elementId
    assert.strictEqual(await cart_icon_quantity.getText(), "1")
    const total_items_amount = await driver.$("id:com.saucelabs.mydemoapp.android:id/totalPriceTV")
    assert.strictEqual(await total_items_amount.getText(), "$ 29.99")
    const proceed_to_checkout_btn = await driver.$("accessibility id:Confirms products for checkout")
    await proceed_to_checkout_btn.click()
    //Checkout - Login screen
    section_title_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/loginTV")
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "Login")
    const username_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/nameET")
    await username_txt_field.addValue("bod@example.com")
    const password_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/passwordET")
    await password_txt_field.addValue("10203040")
    const login_btn = await driver.$("accessibility id:Tap to login with given credentials")
    await login_btn.click()
    //Checkout - Shipping screen
    section_title_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/checkoutTitleTV")
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "Checkout")
    let full_name_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/fullNameET")
    await full_name_txt_field.addValue("Winona Winter")
    const address1_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/address1ET")
    await address1_txt_field.addValue("Mandorley 112")
    const city_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/cityET")
    await city_txt_field.addValue("Tromso")
    const state_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/stateET")
    await state_txt_field.addValue("RS")
    const zip_code_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/zipET")
    await zip_code_txt_field.addValue("89750")
    const country_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/countryET")
    await country_txt_field.addValue("UK")
    const to_payment_btn = await driver.$("accessibility id:Saves user info for checkout")
    await to_payment_btn.click()
    //Checkout - Payment screen
    section_title_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/enterPaymentTitleTV")
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "Checkout")
    section_title_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV")
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "Enter a payment method")
    full_name_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/nameET")
    await full_name_txt_field.addValue("Winona Winter")
    const card_number_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/cardNumberET")
    await card_number_txt_field.addValue("3258 1256 7568 7891")
    const expiration_date_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/expirationDateET")
    await expiration_date_txt_field.addValue("03/25")
    const security_code_txt_field = await driver.$("id:com.saucelabs.mydemoapp.android:id/securityCodeET")
    await security_code_txt_field.addValue("123")
    // TODO: Add assertion for billing checkbox state
    const review_order_btn = await driver.$("accessibility id:Saves payment info and launches screen to review checkout data")
    await review_order_btn.click()
    //Checkout - Review screen
    section_title_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/enterShippingAddressTV")
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "Review your order")
    product_name = await driver.$("id:com.saucelabs.mydemoapp.android:id/titleTV")
    assert.strictEqual(await product_name.getText(), "Sauce Labs Backpack")
    product_price = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV")
    assert.strictEqual(await product_price.getText(), "$ 29.99")
    product_color = await driver.$("accessibility id:Displays color of selected product")
    // assert.strictEqual(await product_color.getAttribute("elementId"), "00000000-0000-012e-ffff-ffff00000261") -> Dynamic elementId
    const full_name_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/fullNameTV")
    assert.strictEqual(await full_name_lbl.getText(), "Winona Winter")
    const total_amount_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/totalAmountTV")
    assert.strictEqual(await total_amount_lbl.getText(), "$ 35.98")
    const place_order_btn = await driver.$("accessibility id:Completes the process of checkout")
    await place_order_btn.click();
    //Order Complete screen
    section_title_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/completeTV")
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "Checkout Complete")
    const thank_you_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/thankYouTV")
    assert.strictEqual(await thank_you_lbl.getText(), "Thank you for your order")
    const catalog_btn = await driver.$("accessibility id:Tap to open catalog")
    await catalog_btn.click();
    // Back to Products screen
    section_title_lbl = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV")
    await section_title_lbl.waitForDisplayed({ timeout: 10000 })
    actual_result = await section_title_lbl.getText()
    assert.strictEqual(actual_result, "Products")
    await driver.deleteSession();
}

main().catch(console.log);