let CalculatorPage = function() {

  this.get = function() {
    let { config } = require('../protractor.conf.js');
    return browser.get(config.baseUrl);
  };

  this.setLeftOperand = function(value) {
    return element(by.model('first')).sendKeys(value);
  };

  this.setRightOperand = function(value) {
    return element(by.model('second')).sendKeys(value);
  };

  this.setOperator = function(value) {
    return element(by.model('operator')).element(by.cssContainingText('option', value)).click();
  };

  this.getResult = function() {
    return element(by.css('body > div > div > form > h2')).getText();
  };

  this.clickGo = function() {
    return element(by.css('#gobutton')).click();
  }
};

module.exports = CalculatorPage;
