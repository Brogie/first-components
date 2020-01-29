import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'first-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: 'Built by Brogie',
      strict: true
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
