export const objectIteration = () => {
  const obj = {
    name: "harsh",
    state: "up",
    city: "india",
  };
  for (const item in obj) {
    console.log(`Key: ${item}, Value: ${obj[item]}`);
  }
  Object.entries(obj).map((value) => console.log(value));
  Object.keys(obj).map((keyValue) => console.log(obj[keyValue]));
  Object.keys(obj).forEach((item, index) => console.log(item, index));
  console.log(Object.values(obj));
};
