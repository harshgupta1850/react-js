// Use of foreach
export const useForEach = () => {
  const newArr = [{ food: ["q", "qw"] }, { food: ["qq", "qww"] }];
  console.log(newArr, "arrya");
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
  newArr.forEach((element, index) => {
    console.log(element.food, index);
    const foodLength = element.food;
    for (let i = 0; i < foodLength.length; i++) {
      console.log(foodLength[i]);
    }
  });
};

//swap numbers withour using third variable
export const swapVariable = () => {
  let a = 5;
  let b = 6;
  [a, b] = [b, a];
  console.log(a, b, "a,b");
};

//Reduce Function
const arr = [1, 2, 3, 4, 5];
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
