const letterPositions = function(sentence) {
  let results = {};
  let resArr = [];

  
 for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  if (sentence[i] === " ") {
    continue;
  }
  if (results[char]) {
    results[char].push(i);
  } else if (!results[char]) {
    results[char] = [];
    results[char].push(i)
  }

 } return results;
};
console.log(letterPositions("hello robert gladue"));



