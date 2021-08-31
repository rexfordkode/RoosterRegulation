const assert = require('assert'); //import asset module
const Rooster = require('../index'); //import Rooster module


//Code below block for rooster
describe('rooster', () => {
  describe('.annouceDawn', () =>{
    //The it block test the return of the method
    it('returns a rooster call', () => {
      	//Setup: Define expected output
			const expected = 'cock-a-doodle-doo!';
        
      //Exercise: Call Rooster.announceDawn and store result in variable
      const actual = Rooster.announceDawn();
        
      //Verify: Use an assert method to compare actual and expected result
      assert.equal(expected,actual);
    });
  });
   describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //Setup
      const inputNumber = 12;
      const expected = '12';
      
      //Exercise
      const actual = Rooster.timeAtDawn(inputNumber);
      
      //Verify
      assert.equal(expected,actual);
    	});
    
    	it('throws an error if passed a number less than 0', () => {
      //Setup
      const inputHour = -1;
      const expected = RangeError;
      
      //Verify
      assert.throws(() => {Rooster.timeAtDawn(inputHour);
      }, expected);
    });
    
      it('throws an error if passed a number greater than 23', () => {
      //Setup
      const inputHour = -1;
      const expected = RangeError;
      
      //Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputHour);
      }, expected);
    });
  });
});
