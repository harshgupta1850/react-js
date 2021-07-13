export const productOne = () => {
  const arr = [1, 2, 4, -3, 0];
  var stepsCount = 0,
    positive = 0,
    negative = 0,
    zeroCount = 0;
  arr.map((value) => {
    if (value > 0) {
      positive += 1;
      stepsCount = stepsCount + (value - 1);
      console.log(stepsCount);
    } else if (value === 0) {
      zeroCount += 1;
    } else {
      negative += 1;
      stepsCount = stepsCount + (-1 - value);
    }
  });
  
  console.log(stepsCount, positive, negative, zeroCount);
};
