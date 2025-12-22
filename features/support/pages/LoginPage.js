export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = '#user-name'
        this.password = '#password'
        this.loginButton = '[data-test="login-button"]'
        this.url = 'https://www.saucedemo.com'
    }

    async login(username, password) {
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
    }

    async click_on_login_button() {
        await this.page.click(this.loginButton)
    }
}