const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Base URL do projeto (usar cy.visit('/'))
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // Aqui podem ser registrados event listeners do Node (se necessário)
    },
    // Localização dos specs (e2e + api)
    specPattern: 'cypress/{e2e,api}/**/*.cy.{js,jsx,ts,tsx}'
  },
  // Reporter para geração de relatório em CI
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  }
});