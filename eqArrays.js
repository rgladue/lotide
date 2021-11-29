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

module.exports = eqArrays;
