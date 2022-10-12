const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://webdriveruniversity.com/',
    specPattern: 'cypress/e2e/webdriveruni/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1920,
    viewportHeight: 1080
  }
})