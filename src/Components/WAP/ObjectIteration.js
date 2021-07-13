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
  Object.keys(obj).map(keyValue=> console.log(obj[keyValue]))
  console.log(Object.values(obj))
};
