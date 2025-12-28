import BasePage from "./base.page"

class ProductsPage extends BasePage {
    get logo() { // seletor do logo MyDemoApp
        return $('~App logo and name')
    }

    get section_title() {
        return $('~title')
    }

    async click_on_product(index) {
        await $(`android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(${index})`).click()
    }
}

export default new ProductsPage()