import { Before, After } from '@cucumber/cucumber'
import { chromium } from 'playwright'

let browser, context, page

Before(async () => {
    browser = await chromium.launch()
    context = await browser.newContext()
    page = await context.newPage()
    global.page = page
})

After(async () => {
    await browser.close()
})