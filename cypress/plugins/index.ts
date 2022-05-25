import * as injectDevServer from '@cypress/react/plugins/next'

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  injectDevServer(on, config)

  return config
}
