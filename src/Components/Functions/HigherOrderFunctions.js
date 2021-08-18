const radius = [1, 2, 4, 3];
  const area = function (r) {
    return Math.PI * r * r;
  };

  const diameter = function (r){
    return 2*r
  }

  const calculate = function (arr, logic) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      output.push(logic(arr[i]));
    }
    return output;
  };

  console.log(calculate(radius, area));
  console.log(calculate(radius, diameter));
  console.log(radius.map(diameter))