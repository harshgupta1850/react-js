const arr1 = [1, 2, 3, 4];
const arr2 = [1, 3, 2];
const intersectionArray = (arr) => {
  const hashmap = {};
  const intersectionArray = [];
  arr1.forEach(function (element) {
    hashmap[element] = 1;
  });
  console.log(hashmap);
  arr2.forEach(function (element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });
  return intersectionArray;
};

console.log(intersectionArray());