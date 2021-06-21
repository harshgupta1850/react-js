//compress the string aaaaabbbbbccccaaaaaaf output a5b6c5f1
const string1 = "aaaaabbbbbccccaaaaaaf";
var newStr = "";
var number = 1;
var finalString = "";
const arr = string1.split("");
const compress = () => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.length - 1);
    if (i < arr.length - 1) {
      if (arr[i] === arr[i + 1]) {
        newStr = arr[i];
        number = number + 1;
      } else {
        finalString += newStr + number;
        newStr = arr[i];
        number = 1;
      }
    } else if (arr.length - 1 === i) {
      if (arr[i] === arr[i + 1]) {
        newStr = arr[i];
        number = number + 1;
      } else {
        newStr = arr[i];
        number = 1;
        finalString += arr[i] + number;
      }
    }
    return finalString;
  }
};
compress();
