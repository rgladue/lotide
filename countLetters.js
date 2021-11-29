const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(input) {
  letterCount = {};

  for (const letter of input) {
    // console.log(letter);
    if (letter === "L") {
      letterCount.l = (letterCount.l + 1) || 1;
    }
    if (letter === "H") {
      letterCount.h = (letterCount.h + 1) || 1;
    }
  }
  return letterCount;
};

console.log(countLetters("LHL LHL LHL"));