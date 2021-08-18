const finalAmount = 420;
const demoArr = [100, 20, 10, 5];

const calculate = () => {
  let remainingAmount = finalAmount;
  let noOfCoins = 0;
  for (var i = 0; i < demoArr.length; i++) {
    console.log(
      noOfCoins,
      "noOfCoins",
      remainingAmount,
      "remainingAmount",
      demoArr[i],
      "demo",
      i,
      "i"
    );
    if (remainingAmount > 0) {
      if (remainingAmount > demoArr[i]) {
        if (remainingAmount % demoArr[i] > 0) {
          noOfCoins += parseInt(remainingAmount / demoArr[i]);
          remainingAmount = remainingAmount % demoArr[i];
        } else {
          noOfCoins += parseInt(remainingAmount / demoArr[i]);
          return noOfCoins;
        }
      }else{
          console.log('no not divisible')
      }
    } else{
      return noOfCoins;
    }
  }

  console.log(noOfCoins);
};

calculate();