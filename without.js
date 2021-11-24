const eqArrays = function(arr1, arr2) {
  if (arr1[0] !== arr2[0]) {
  return false
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

const without = function(source, removable) {
  const newarr = [];
  const junk = [];
  for (const item of source) {
    if (item !== removable[0] && item !== removable[1] && item !== removable[2]) {
      newarr.push(item);
    } else junk.push(item); 
  }
  return newarr;
};

console.log(without([1, 2, 3],["2", 2, "3"]));