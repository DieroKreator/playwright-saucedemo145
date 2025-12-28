import BasePage from "./base.page"

module.exports = class ProductDetailPage extends BasePage {
    get titulo_produto() {
        return $('id=com.saucelabs.mydemoapp.android:id/productTV')
    }

    get preco_produto() {
        return $('id=com.saucelabs.mydemoapp.android:id/priceTV')
    }

    get botao_adicionar_no_carrinho() {
        return $('~Tap to add product to cart')
    }

    get icone_carrinho() {
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]')
    }
}