const arr = [2, 3, 7, 4, 6, 9];
arr.sort();
var missingValue = [];
for (var i = 0; i < arr.length; i++) {
  const subtractValue = arr[i + 1] - arr[i];
  if (subtractValue !== 1) {
    missingValue.push(arr[i] + 1);
  }
}
console.log(missingValue);

// M2

const findMissingNumber = (arr) => {
  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);
  const maxNumberSum = (maxNumber * (maxNumber + 1)) / 2;
  const minNumberSum = (minNumber * (minNumber - 1)) / 2;
  const minMaxSubtraction = maxNumberSum - minNumberSum;
  return minMaxSubtraction - arr.reduce((acc, value) => acc + value);
};

console.log(findMissingNumber([2, 6, 7, 4, 5, 8, 9]));
