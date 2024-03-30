import { defineConfig } from 'cypress'
import { cypressCodegen } from 'cypress-codegen'
import configs from './cypress/configs/configs'

export default defineConfig({
  e2e: {
    baseUrl: `${configs.BASE_URL}`,
    screenshotOnRunFailure: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: true,
    specPattern: 'cypress/e2e/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    video: false,
    setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ) {
      cypressCodegen(on, config)
      return config
    },
  },
})
