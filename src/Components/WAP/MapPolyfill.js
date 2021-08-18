const arr = [1, 2, 3, 4];

// eslint-disable-next-line no-extend-native
Array.prototype.ourMap = function (callback) {
  var arr = []; 
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr
};

const calculate = (value) => value * 2;
const multiplyByTwo = () => {
  return arr.ourMap(calculate);
};

console.log(multiplyByTwo());
