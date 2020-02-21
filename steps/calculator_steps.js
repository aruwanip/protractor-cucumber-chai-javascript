let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let CalculatorSteps = function() {

  this.World = function () {
    let CalculatorPage = require("../pages/calculator_page.js");
    this.page = new CalculatorPage();
  };

  this.Given('The calculator is open', function () {
    // Handling asynchronous step definition with Promise return
    return this.page.get();
  });

  this.When('I calculate $first $operator $second', function (first, operator, second, callback) {
    // Handling asynchronous step definition with callback function
    this.page.setLeftOperand(first);
    this.page.setOperator(operator);
    this.page.setRightOperand(second);
    this.page.clickGo();
    callback();
  });

  this.Then('the result should equal $result', function (result, callback) {
    expect(this.page.getResult()).to.eventually.equal(result).and.notify(callback);
  });
};

module.exports = CalculatorSteps;