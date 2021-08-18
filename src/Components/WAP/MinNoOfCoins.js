const demonination = [1, 2, 3, 4, 5];
const amount = 12;
const noOfCoins = 0;

const calculateCoin = (d, a, n, c) => {
  if (a === 0 || d[n] === 0) return;
  if (d[n] < a) {
    if (a % d[n] === 0) {
      c += parseInt(a / d[n]);
    } else {
      let ra = a % d[n];
      c += parseInt(a / d[n]);
      return calculateCoin(d, ra, n - 1, c);
    }
  } else if (d[n] === a) {
    c += parseInt(a / d[n]);
  } else {
    if (n < 0) return "imp";
    else {
      return calculateCoin(d, a, n - 1, c);
    }
  }
  return c;
};

console.log(
  calculateCoin(demonination, amount, demonination.length - 1, noOfCoins)
);
