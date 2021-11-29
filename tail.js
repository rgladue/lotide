
const tail = function(array) {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    newarr.push(array[i]);
  
  }

  return newarr.slice(1);
};

module.exports = tail;



