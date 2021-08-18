const matrix = [
    [1, 2, 4],
    [3, 4, 5],
    [4, 5, 6],
  ];
  
  const calculateSum = () => {
    let diagonal1 = 0;
    let diagonal2 = 0;
    // console.log(matrix)
    for (let i = 0; i < matrix.length; i++) {
      diagonal1 += matrix[i][i];
      diagonal2 += matrix[i][matrix.length-i-1]
    }
    console.log(diagonal1,diagonal2);
  };
  
  calculateSum();
  