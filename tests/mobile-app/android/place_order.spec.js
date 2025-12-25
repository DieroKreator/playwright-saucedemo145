// This sample code supports WebdriverIO client >=7
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import { remote } from 'webdriverio';
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
    const el1 = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
    const el2 = await driver.$("-android uiautomator:new UiSelector().text(\"Sauce Labs Backpack\")");
    const el3 = await driver.$("-android uiautomator:new UiSelector().text(\"$ 29.99\")");
    const el4 = await driver.$("accessibility id:Sauce Labs Backpack");
    await el4.click();
    //Product Details screen
    const el5 = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
    const el6 = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV");
    const el7 = await driver.$("accessibility id:Blue color");
    const el8 = await driver.$("accessibility id:Tap to add product to cart");
    await el8.click();
    const el9 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(3)");
    await el9.click();
    //Cart screen
    const el10 = await driver.$("id:com.saucelabs.mydemoapp.android:id/cartIV");
    await el10.click();
    const el11 = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
    await el11.click();
    const el12 = await driver.$("id:com.saucelabs.mydemoapp.android:id/titleTV");
    await el12.click();
    const el13 = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV");
    await el13.click();
    const el14 = await driver.$("accessibility id:Displays color of selected product");
    await el14.click();
    const el15 = await driver.$("id:com.saucelabs.mydemoapp.android:id/cartTV");
    await el15.click();
    const el16 = await driver.$("id:com.saucelabs.mydemoapp.android:id/totalPriceTV");
    await el16.click();
    const el17 = await driver.$("accessibility id:Confirms products for checkout");
    await el17.click();
    //Checkout - Login screen
    const el18 = await driver.$("id:com.saucelabs.mydemoapp.android:id/loginTV");
    await el18.click();
    const el19 = await driver.$("id:com.saucelabs.mydemoapp.android:id/nameET");
    await el19.addValue("bod@example.com");
    const el20 = await driver.$("id:com.saucelabs.mydemoapp.android:id/passwordET");
    await el20.addValue("10203040");
    const el21 = await driver.$("accessibility id:Tap to login with given credentials");
    await el21.click();
    //Checkout - Shipping screen
    const el22 = await driver.$("id:com.saucelabs.mydemoapp.android:id/checkoutTitleTV");
    await el22.click();
    const el23 = await driver.$("id:com.saucelabs.mydemoapp.android:id/fullNameET");
    await el23.addValue("Winona Winter");
    const el24 = await driver.$("id:com.saucelabs.mydemoapp.android:id/address1ET");
    await el24.addValue("Mandorley 112");
    const el25 = await driver.$("id:com.saucelabs.mydemoapp.android:id/cityET");
    await el25.addValue("Tromso");
    const el26 = await driver.$("id:com.saucelabs.mydemoapp.android:id/stateET");
    await el26.addValue("RS");
    const el27 = await driver.$("id:com.saucelabs.mydemoapp.android:id/zipET");
    await el27.addValue("89750");
    const el28 = await driver.$("id:com.saucelabs.mydemoapp.android:id/countryET");
    await el28.addValue("UK");
    const el29 = await driver.$("accessibility id:Saves user info for checkout");
    await el29.click();
    //Checkout - Payment screen
    const el30 = await driver.$("id:com.saucelabs.mydemoapp.android:id/enterPaymentTitleTV");
    await el30.click();
    const el31 = await driver.$("id:com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV");
    await el31.click();
    const el32 = await driver.$("id:com.saucelabs.mydemoapp.android:id/nameET");
    await el32.addValue("Winona Winter");
    const el33 = await driver.$("id:com.saucelabs.mydemoapp.android:id/cardNumberET");
    await el33.addValue("3258 1256 7568 7891");
    const el34 = await driver.$("id:com.saucelabs.mydemoapp.android:id/expirationDateET");
    await el34.addValue("03/25");
    const el35 = await driver.$("id:com.saucelabs.mydemoapp.android:id/securityCodeET");
    await el35.addValue("123");
    const el36 = await driver.$("accessibility id:Saves payment info and launches screen to review checkout data");
    await el36.click();
    //Checkout - Review screen
    const el37 = await driver.$("id:com.saucelabs.mydemoapp.android:id/enterShippingAddressTV");
    await el37.click();
    const el38 = await driver.$("id:com.saucelabs.mydemoapp.android:id/titleTV");
    await el38.click();
    const el39 = await driver.$("id:com.saucelabs.mydemoapp.android:id/priceTV");
    await el39.click();
    const el40 = await driver.$("accessibility id:Displays color of selected product");
    await el40.click();
    const el41 = await driver.$("id:com.saucelabs.mydemoapp.android:id/fullNameTV");
    await el41.click();
    const el42 = await driver.$("id:com.saucelabs.mydemoapp.android:id/totalAmountTV");
    await el42.click();
    const el43 = await driver.$("accessibility id:Completes the process of checkout");
    await el43.click();
    //Order Complete screen
    const el44 = await driver.$("id:com.saucelabs.mydemoapp.android:id/completeTV");
    await el44.click();
    const el45 = await driver.$("id:com.saucelabs.mydemoapp.android:id/thankYouTV");
    await el45.click();
    const el46 = await driver.$("accessibility id:Tap to open catalog");
    await el46.click();
    const el47 = await driver.$("id:com.saucelabs.mydemoapp.android:id/productTV");
    await el47.click();
    await driver.deleteSession();
}

main().catch(console.log);