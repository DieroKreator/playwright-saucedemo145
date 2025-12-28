import { Given, When, Then, After } from "@wdio/cucumber-framework"
import ProductsPage from "../../../pages/mobile-app/products.page.js"
import ProductDetailsPage from "../../../pages/mobile-app/product_details.page.js"
import CartPage from "../../../pages/mobile-app/cart.page.js"

After(async () => {
    // Finaliza o teste que estava em andamento
    await driver.terminateApp('com.saucelabs.mydemoapp.android');
    // Deixa pronto para rodar o próximo
    await driver.activateApp('com.saucelabs.mydemoapp.android');
})

Given("I am on the Products screen", async () => {
    await driver.pause(1000)
})

When("on {string} I select the product at position {string}", async (scroll, index) => {
    await ProductsPage.scrollUp(scroll)
    await ProductsPage.click_on_product(index)
})

Then("I verify the {string} and the {string}", async (product, price) => {
    await expect(ProductDetailsPage.product_title).toHaveText(product)
    await expect(ProductDetailsPage.product_price).toHaveText(price)
})

When("I add the product to the cart", async () => {
    await ProductDetailsPage.scrollUp(1)
    await ProductDetailsPage.add_to_cart_btn.click()
})

Then("the number 1 is displayed on the cart icon", async () => {
    await expect(ProductDetailsPage.cart_icon).toHaveText("1")
})

When("I click on the cart", async () => {
    await ProductDetailsPage.cart_icon.click()
})

Then("I verify the {string} and the {string} in the cart", async (product, price) => {
    await expect(CartPage.product_title).toHaveText(product)
    await expect(CartPage.product_price).toHaveText(price)
})