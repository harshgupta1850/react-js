export const reverse = () => {
  //using Reverse
  const arr = [1, 2, 9, 8];
  const reverseArr = arr.reverse();
  console.log(reverseArr);

  //using push method
  const arr1 = [1, 2, 4, 6, 5];
  const newArr = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    newArr.push(arr1[i]);
  }
  console.log(newArr);

  //using Spread operator
  arr.map(arr.pop, [...arr]);
  console.log(arr);

};
