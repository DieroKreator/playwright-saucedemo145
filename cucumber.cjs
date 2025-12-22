module.exports = {
    default: {
        paths: ['features/**/*.feature'],  // Only look for .feature files
        require: ['features/support/steps/**/*.js', 'features/support/hooks.js'],  // Only require step definitions and hooks, NOT pages
        format: ['progress', 'html:cucumber-report.html', 'json:cucumber-report.json'],
        formatOptions: { snippetInterface: 'async-await' },
        publishQuiet: true
    }
};