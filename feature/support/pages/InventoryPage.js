export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = '.title'
    }

    async login(username, password) {
        await this.page.waitForSelector(this.title)
        const sectionTitle = await this.page.textContent(this.title)
        if (!sectionTitle.includes('Products')) {
            throw new Error('Login failed: navigation to Inventory page unsuccessful.')
        }
    }
}