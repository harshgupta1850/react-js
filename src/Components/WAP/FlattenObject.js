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




const flatObj = {
  name: "Harsh",
  place: {
    home: {
      personal: {
        city: "up",
      },
    },
  },
};

const flatten = (obj) => {
  let finalObj = {};
  for (var item in obj) {
    //   console.log(item)
    if (typeof obj[item] === "object") {
      finalObj = { ...finalObj, ...flatten(obj[item]) };
    } else {
      finalObj[item] = obj[item];
    }
  }
  return finalObj;
};

console.log(flatten(flatObj));