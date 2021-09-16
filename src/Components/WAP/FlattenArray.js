/* eslint-disable no-extend-native */
const arr = [1, 2, 3, [4, 5, 6, [5, 4], 3, [1]], 4, 5];

Array.prototype.flatten = function () {
  const finalArray = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      finalArray.push(...this[i].flatten());
    } else {
      finalArray.push(this[i]);
    }
  }
  return finalArray;
};
console.log(arr.flatten())

//m2
console.log(arr.flat(Infinity));

//m3 not for deeply nested
console.log(Array.prototype.concat.apply([], arr));

//m4 not for deeplynested

console.log(
    arr.reduce(function (a, b) {
      return a.concat(b);
    }, [])
  );