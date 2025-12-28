import BasePage from "./base.page"

module.exports = class ProductDetailsPage extends BasePage {
    get product_title() {
        return $('id=com.saucelabs.mydemoapp.android:id/productTV')
    }

    get product_price() {
        return $('id=com.saucelabs.mydemoapp.android:id/priceTV')
    }

    get add_to_cart_btn() {
        return $('~Tap to add product to cart')
    }

    get cart_icon() {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]')
    }
}