import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'p376js',
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
