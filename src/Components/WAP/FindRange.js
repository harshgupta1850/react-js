const range = (x, y) => {
    let rangeArray = [];
    while (y > x) {
      rangeArray.push(x);
      x = x + 1;
      range(x, y);
    }
    return rangeArray;
  };
  
  console.log(range(2, 9));