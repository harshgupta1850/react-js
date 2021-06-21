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

  //Reduce Function
  arr.reduce((acc, currentValue) => {
    return acc + currentValue;
  });

  //Sum of array of object 
  let initialValue = 0;
  let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    initialValue
  );
  console.log(sum); // logs 6

  //find max no
  console.log(Math.max(1, 2, 5, 7));

  //   for (let i = arr1.length-1; i >= 0; i--) {
  //   }
};
