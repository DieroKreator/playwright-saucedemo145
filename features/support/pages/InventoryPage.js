export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = '.title'
    }

    async verify_page_title(url, sectionTitle) {
        const url_esperada = `/${url}\.html/`
        await this.page.waitForURL(url_esperada)
        const url_atual = this.page.url()

        await this.page.waitForSelector(this.title)
        sectionTitle = await this.page.textContent(this.title)

        if (!sectionTitle.includes('Products') || !url_atual.inccludes(url_esperada)) {
            throw new Error('Login failed: navigation to Inventory page unsuccessful.')
        }
    }
}