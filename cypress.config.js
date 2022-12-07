const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "$schema": "https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json",
    "baseUrl": "https://app.deel.com/login",
    "chromeWebSecurity": false,
    "modifyObstructiveCode": false,
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "configFile": "reporter-config.json"
    },
    "defaultCommandTimeout": 25000
  },
});
