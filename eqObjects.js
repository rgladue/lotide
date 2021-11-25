const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);
  }
};

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






const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ab), true); // => true

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba));
assertEqual(eqObjects(ab, ba), true);