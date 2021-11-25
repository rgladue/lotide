const eqObjects = function(object1, object2) {
  const entries1 = Object.entries(object1);
  const entries2 = Object.entries(object2);
  entries1.sort();
  entries2.sort();
  if (entries1.length !== entries2.length) {
    return false;
  }
  
  if (entries1[0][0] === entries2[0][0] && entries1[0][1] === entries2[0][1] && entries1[1][0] === entries2[1][0] && entries1[1][1] === entries2[1][1]) {
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba)
