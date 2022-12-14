/*
 * No 'e2e' config element, as this is a library withhout web page.
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
          sourceRoot: 'projects/bepo65/mat-tristate-checkbox',
          buildOptions: {
            tsConfig: 'cypress/tsconfig.json'
          }
        }
      }
    },
    specPattern: '**/ct/*.cy.ts'
  }
});
