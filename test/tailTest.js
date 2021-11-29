const assert = require("chai").assert
const tail = require("../tail")

describe("#tail testing", () => {
  it("returns array from index 1 to end of array", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]);
  });
  
  });