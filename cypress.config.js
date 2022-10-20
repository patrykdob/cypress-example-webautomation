const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://webdriveruniversity.com/',
    automationStore: 'https://automationteststore.com/',
    specPattern: ['cypress/e2e/webdriveruni/*.cy.js', 'cypress/e2e/automationstore/*.cy.js'],
    viewportWidth: 1920,
    viewportHeight: 1080,
    projectId: "ih9dk5"
  }
})