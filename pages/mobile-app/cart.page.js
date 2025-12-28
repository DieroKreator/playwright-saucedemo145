import BasePage from "./base.page"

module.exports = class CartPage extends BasePage {

    get product_title() {
        return $('id=com.saucelabs.mydemoapp.android:id/titleTV')
    }

    get product_price() {
        return $('id=com.saucelabs.mydemoapp.android:id/priceTV')
    }
}