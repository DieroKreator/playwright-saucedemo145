import { test, expect } from '../utils/logger.js';
import { snap } from '../utils/snap'

test.describe('SauceDemo - fluxo principal de compra', () => {
    test('Login, Adicionar Mochila no Carrinho e Verificações',
        async ({ page }, testInfo) => {
            testInfo.setTimeout(testInfo.timeout + 15000)

            await test.step('Acessar SauceDemo.com', async () => {
                await page.goto('/')
                await expect(page).toHaveURL('/')
                await expect(page.locator('[data-test="login-button"]')).toHaveText('Login')
            })

            await test.step('Login com Sucesso', async () => {
                await page.locator('[data-test="username"]').fill('standard_user')
                await page.locator('[data-test="password"]').fill('secret_sauce')
                await page.locator('[data-test="login-button"]').click()

                await expect(page).toHaveURL(/inventory\.html/)
                await expect(page.locator('[data-test="title"]')).toHaveText('Products')
                await snap(page, testInfo, 'TC001-Passo02B-Inventory')
            })


        })
})