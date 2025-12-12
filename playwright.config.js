module.exports = {
    use: {
        browserName: 'firefox',
        headless: true,
        // screenshot: 'only-on-failure',
        // video: 'retain-on-failure',
    },
    reporter: [['html', { outputFolder: 'report', open: 'never' }]],
    timeout: 60000,
}