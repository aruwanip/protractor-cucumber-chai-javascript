exports.config = {
  baseUrl: 'http://juliemr.github.io/protractor-demo/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'features/*.feature'
  ],
  cucumberOpts: {
    require: 'steps/*_steps.js'
  }
}
