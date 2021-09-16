const factorial = (n) => {
  let factorialValue = 0;
  if (n === 0 || n === 1) factorialValue = 1;
  if (n > 1) {
    factorialValue = n * factorial(n - 1);
  }
  return factorialValue;
};

console.log(factorial(4));
