const arr = [1, 2, 3, 4];

// eslint-disable-next-line no-extend-native
Array.prototype.ourFilter = function (callback, context) {
  var finalArr = [];
  this.forEach(
    (element, i, arr) =>
      callback.call(context, element, i, arr) && finalArr.push(element)
  );

  return finalArr;
};

const calculate = (element) => element < 12;

const greaterThanTwo = () => arr.ourFilter((element) => element > 2);

console.log(greaterThanTwo());

//m2
const filter = (arr, callback) => {
  const filteredArray = [];
  arr.forEach((element, i, arr) => {
    if (callback(element, i, arr)) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
};

const greaterThanTwo2 = () => filter(arr, calculate);

console.log(greaterThanTwo2());
