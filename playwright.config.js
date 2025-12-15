const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        baseURL: 'https://www.saucedemo.com',
        browserName: 'firefox',
        headless: true,
        launchOptions: {
            slowMo: 0 // wait between every action
        },
        // screenshot: 'only-on-failure',
        // video: 'retain-on-failure',
    },
    reporter: [['html', { outputFolder: 'report', open: 'never' }]],
    timeout: 60000,
});