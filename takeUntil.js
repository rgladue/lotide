const takeUntil = function(array, callback) {
  const resArray = [];
  for (const item of array) {
    if (callback(item)) {
      return resArray;
    } else {
      resArray.push(item);
    }
  } return resArray;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));

const eqArrays = function(arr1, arr2) {
  if (arr1[0] !== arr2[0]) {
    return false;
  }
  if (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
 
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));
