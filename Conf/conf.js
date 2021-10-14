// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  chromeOptions: {
    args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    },

    shardTestFiles: true,

    maxInstances: 2, 

    multiCapabilities: [
      {
          shardTestFiles: true,
          maxInstances: 1,
          sequential: true,
          browserName: 'chrome',
          specs: ['../tests/LoginFormTest.js']
      },
      {
          shardTestFiles: true,
          maxInstances: 1,
          sequential: true,
          browserName: 'chrome',
          specs: ['../tests/CreateAccountTest.js']
          
      }
    ],

   /* specs: ['../tests/LoginFormTest.js',
          '../tests/CreateAccountTest.js'
        ],
        */

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  },

  onPrepare: function() {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  }
};
