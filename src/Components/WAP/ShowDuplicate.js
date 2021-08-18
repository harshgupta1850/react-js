const arr = [1, 2, 3, 4, 4, 2, 1];

const findDuplicate = (arr) => {
  const obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  const arr1 = [];

  for (let item in obj) {
    if (obj[item] > 1) {
      arr1.push(Number(item));
    }
  }
  return arr1;
};

console.log(findDuplicate(arr));


const printDuplicate = () =>
  arr.filter((element, index, arr) => arr.indexOf(element) !== index);

console.log(printDuplicate());
