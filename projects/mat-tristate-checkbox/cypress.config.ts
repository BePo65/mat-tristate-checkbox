/*
 * No 'e2e' config element, as this is a library without web page.
 */

import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: '',
          sourceRoot: 'projects/mat-tristate-checkbox',
          buildOptions: {
            tsConfig: 'cypress/tsconfig.json'
          }
        }
      }
    },
    specPattern: '**/ct/*.cy.ts'
  }
});
