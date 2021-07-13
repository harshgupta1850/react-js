//const reverse a string
export const reverse = (str) => {
  const splitStringArray = str.split(""); //["h", "a", "r", "s", "h"]
  //const reversedString = splitStringArray.reverse().join("");
  //reverse an array

  const newReveresedArray = [];
  console.log(splitStringArray, "arrya");

  splitStringArray.forEach((element, index) => {
    console.log(element, index);
  });

  //swapping elemnts
  for (let i = 0; i < splitStringArray.length / 2; i++) {
    //Swap the elements
    [splitStringArray[i], splitStringArray[splitStringArray.length - i - 1]] = [
      splitStringArray[splitStringArray.length - i - 1],
      splitStringArray[i],
    ];
  }

  return splitStringArray;
};
