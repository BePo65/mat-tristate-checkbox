/*
 * setupNodeEvents is required, as angular multi project workspace uses
 * tsconfig.app.json as a typescript configuration file and without the
 * webpack preprocessor cypress expects a file named tsconfig.json
 */

import { defineConfig } from 'cypress';
import * as webpackPreprocessor from '@cypress/webpack-preprocessor';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: false,
    setupNodeEvents: (on, config) => {
      const defaults = webpackPreprocessor.defaultOptions;
      on('file:preprocessor', webpackPreprocessor(defaults));
      return config;
    }
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: '',
          sourceRoot: 'projects/mat-tristate-checkbox-demo',
          buildOptions: {
            tsConfig: 'cypress/tsconfig.json'
          }
        }
      }
    },
    specPattern: '**/ct/*.cy.ts'
  }
});
