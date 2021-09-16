const isArray = (arr) => {
  if (toString.call(arr) === "[object Array]") return true;
  return false;
};

console.log(isArray([1, 2, 3]));
console.log(isArray("123"));
