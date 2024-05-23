const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log({cabecalho}) {
          console.log('%s', cabecalho)

          return null
        },
      })
    },
  },
  setupNodeEvents(on, config) {
    // ...
    const options = {
      outputRoot: config.projectRoot + '/logs/',
      outputTarget: {
        'out.txt': 'txt',
        'out.json': 'json',
      }
    };
  
    require('cypress-terminal-report/src/installLogsPrinter')(on, options);
    // ...
  }
});


