let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let CalculatorSteps = function() {

  this.World = function () {
    let CalculatorPage = require("../pages/calculator_page.js");
    this.page = new CalculatorPage();
  };

  this.Given('The calculator is open', function () {
    return this.page.get();
  });

  this.When('I calculate $first $operator $second', function (first, operator, second) {
    this.page.setLeftOperand(first);
    this.page.setOperator(operator);
    this.page.setRightOperand(second);
    return this.page.clickGo();
  });

  this.Then('the result should equal $result', function (result) {
    return expect(this.page.getResult()).to.eventually.equal(result);
  });
};

module.exports = CalculatorSteps;