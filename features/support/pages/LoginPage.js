export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://wwww.saucedemo.com'
        this.username = '#username'
        this.password = '#password'
        this.loginButton = '#login-button'
    }

    async login(username, password) {
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
    }

    async click_on_login_button() {
        await this.page.click(this.loginButton)
    }
}