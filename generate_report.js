import reporter from 'cucumber-html-reporter'

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber-report.json',
    output: 'cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome",
        "Platform": process.platform
    },
}

reporter.generate(options)