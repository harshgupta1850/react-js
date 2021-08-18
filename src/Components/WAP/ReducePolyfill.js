/* eslint-disable no-extend-native */
const arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (callback,initial) {
    let acc = initial || 10
  this.forEach((element,index,arr) => {
    acc = callback(acc,element,index,this)
  });
  return acc
};

const calculate = () => arr.myReduce((acc, value) => acc - value);


console.log(calculate());
let total = 0;
arr.forEach((element) => {
  total += element;
});
console.log(total)