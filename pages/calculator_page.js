let CalculatorPage = function() {

  this.get = function() {
    let { config } = require('../protractor.conf.js');
    return browser.get(config.baseUrl);
  };

  this.setLeftOperand = function(value) {
    return element(by.model('first')).sendKeys(value);
  };

  this.setRightOperand = function(value) {
    // TODO
  };

  this.setOperator = function(value) {
    return element(by.model('operator')).element(by.cssContainingText('option', value)).click();
  };

  this.getResult = function() {
    // TODO
  };

  this.clickGo = function() {
    // TODO
  }
};

module.exports = CalculatorPage;
