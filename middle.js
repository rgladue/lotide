

const middle = function(array) {
  for (i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return "Please add more than two elements to your array.";
       
    }
    if (array.length === 3) {
      return array.slice(1, 2);
    }
    if (array.length === 4) {
      return array.slice(1, 3);
    }
    if (array.length === 5) {
      return array.slice(2, 3);
    }
    if (array.length === 6) {
      return array.slice(2, 4);
    }
    if (array.length === 7) {
      return array.slice(3, 4);
    }
    if (array.length === 8) {
      return array.slice(3, 5);
    }

  } 
};

module.exports = middle;

