const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
// console.log("array: ", array);
// console.log("callback: ", cb)

  const results = [];
  for(let item of array) {
    // console.log("item before: ", item);
    // console.log("item after: ", cb(item));
    // console.log("---")
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1)


map(words, results1);