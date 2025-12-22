import { Given, When, Then } from '@cucumber/cucumber'
import { chromium } from 'playwright'
import LoginPage from '../pages/LoginPage.js'
import InventoryPage from '../pages/InventoryPage.js'

let browser, context, page
let loginPage, inventoryPage

Given('the user is on the login page', async () => {
    browser = await chromium.launch({ headless: true })
    context = await browser.newContext()
    page = await context.newPage()
    loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
    await page.goto('https://www.saucedemo.com')
})

When('the user enters a valid {string} and {string}', async (user, password) => {
    await loginPage.login(user, password)
})

When('clicks on the login button', async () => {
    await loginPage.click_on_login_button()
})

Then('the user is redirected to the {string} page and title is {string}', async (url, title) => {
    await inventoryPage.verify_page_title(url, title)
    await page.waitForTimeout(2000)
    await page.close()
})