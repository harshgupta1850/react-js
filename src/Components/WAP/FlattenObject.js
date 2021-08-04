export const flatObject = (user, finalObject, keyName) => {
  console.log("flat obje");
  for (let item in user) {
    console.log(item);

    if (typeof user[item] === "object") {
      keyName = `${keyName}_${item}`;
      flatObject(user[item], finalObject, keyName);
    } else {
      keyName = `${keyName}_${item}`;
      finalObject[keyName] = user[item];
    }
  }
  console.log(finalObject);
  return finalObject;
};

const user = {
  name: "Harsh",
  address: {
    personal: {
      city: "guragaon",
      state: "Haryana",
    },
  },
};
const finalObject = {};
let keyName = "user";
flatObject(user, finalObject, keyName);
