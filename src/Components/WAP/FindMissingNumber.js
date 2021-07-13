export const FindMissingNumber = () => {
  const arr = [1, 2, 3, 4, 6, 7, 9, 8];
  const arrLength = arr.length + 1;
  let sumOfArray = (arrLength * (arrLength + 1)) / 2;
  //   sum of array of elements using reduce
  const sum = arr.reduce((acc, value) => acc + value);
  //   console.log(sum)
  //method 1
  const number = sumOfArray - sum;
  console.log(number);
  //Method 2
  var missingNumber = arr?.map((value) => {
    return sumOfArray -= value;
  });
  console.log(missingNumber,sumOfArray);
};


const arr = [2,3,7,4,6,9]
arr.sort()
var missingValue =  []
for(var  i = 0 ; i<arr.length ; i++){
const subtractValue = arr[i+1]-arr[i]
	if(subtractValue!==1){
  		missingValue.push(arr[i]+1)
  }
}
console.log(missingValue)