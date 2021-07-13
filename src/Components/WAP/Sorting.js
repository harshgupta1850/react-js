//Sorting using inbuilt Sort
export const usingSort = () => {
  const inputArr = [5, 4, 9, 2, 1, 3, 0, -5, 0, 4, 5, 10, 14, 11];
  console.log(inputArr.sort((a, b) => a - b));
};

//Bubble sort
export const bubbleSort = () => {
  const arr = [5, 4, 9, 2, 1, 3, 0, -5, 0, 4, 5, 10, 14, 11];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  console.log(arr);
  return arr;
};

//Selection sort
export const selectionSort = () => {
  const arr = [5, 4, 9, 2, 1, 3, 0, -5, 0, 4, 5, 10, 14, 11];
  var minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  console.log(arr);
  return arr;
};

//Insertion sort
export const insertionSort = () => {
  const inputArr = [5, 4, 9, 2, 1, 3, 0, -5, 0, 4, 5, 10, 14, 11];
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  console.log(inputArr);
  return inputArr;
};

//Merge Sort
export const mergeSort = () => {
  const inputArr = [5, 4, 9, 2, 1, 3, 0, -5, 0, 4, 5, 10, 14, 11];
  var len = inputArr.length
  console.log(len);
};
