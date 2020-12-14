var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('will test if the output of 5! is 120', () => {

      const inputNumber = 5;
      const expectedResult = 120;

      const factorialNum =  Calculate.factorial(inputNumber);

      assert.equal(Calculate.factorial(5), 120);
    });
    it('will test if the output of 3! is 6', () => {
      const inputNumber = 3;
      const expectedResult = 6;

      const factorialNum = Calculate.factorial(inputNumber);

      assert.equal(Calculate.factorial(3), 6);
    });
    it('returns 1 when you pass in 0', () => {
      const inputNumber = 0;
      const expectedResult = 1;

      const factorialNum = Calculate.factorial(inputNumber);

      assert.equal(Calculate.factorial(0), 1);
      
    })
  });
});
