class ProductsPage {

    async selectProduct(product) {

        // Ler e Selecionar todos os cartões de produto (productIV)
        const cards = await $$(
            '-android uiautomator',
            'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV")'
        )

        // Ler cada cartao dentro do conjunto de cartoes
        // E selecionar aquele que tiver o nome do produto desejado

        for (let cartao of cards) {
            // Sobe um nível no elemento (pegue o cartão inteiro)
            let card = await cartao.$('..')

            // Dentro do card/cartao, pega o nome do produto
            let product_name = await card.$(
                '-android uiautomator',
                //'new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV")'
                `new UiSelector().text("${product}")`
            )

            let product_name_txt = await product_name.getText()

            // Compara se é o nome do produto desejado
            if (product_name_txt == product) {
                await cartao.click() // Se é, clica nele
                return // sai do for após encontrar o produto desejado
            }

        }
    }


} // UI Automator Viewer --> Android Studio