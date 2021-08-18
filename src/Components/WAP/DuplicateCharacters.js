export const duplicate = () => {
  const str = "Hello";
  const lowerStr = str.toLowerCase();
  const strArr = lowerStr.split("");
  return strArr
    .filter((value, index, a) => {
      return a.indexOf(value) === index;
    })
    .join("");
};
