//import the assert module 
const assert = require('assert');
//import the Rooster module from '../index'
const Rooster = require('../index');

//write a describe block for Rooster 
describe('Rooster', () => {
  //describe block for .announceDawn method
  describe('.announceDawn', () =>{
    //write describe block for .timeAtDawn
    describe('.timeAtDawn', () => {
      it('returns its argument as a string', () => {
      const inputNumber = 6;
      const expected = '6';
      const dawnTime = Rooster.timeAtDawn('6');

      assert.strictEqual(expected, dawnTime);
      });
    });
    //it block that tests the method 'returns..'
    it('returns a rooster call', () => {
      //Define expected output 
      const expected = 'cock-a-doodle-doo!';
      //Call Rooster.announceDawn
      const dawn = Rooster.announceDawn();
      //Use assert method to compare actual & expected results 
      assert.ok(expected == dawn);
    }); 
  });
});
