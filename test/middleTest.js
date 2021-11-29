const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle tests", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3, 4] for ['1, 2, 3, 4, 5, 6']", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
  it("returns 'please add more than two elements to your array' if array is less than two", () => {
    
    if (array.length < 2) {
      return 'please add more than two elements to your array';
    }
    assert.deepEqual(middle([1, 2])); 
  });
});