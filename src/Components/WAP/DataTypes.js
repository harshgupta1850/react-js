console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(typeof NaN); //number
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof Array); //function
console.log(typeof Object); //function
console.log(typeof {}); //Object
console.log({} == {}); //false
console.log({} === {}); //false
console.log([] == []); //false
console.log([] === []); //false
//console.log(typeof function) // give error

undefined;
Boolean;
Number;
String;
BigInt;
Symbol;
Object;
// function

const obj3 = {
  name: "Nityam",
  surname: "Gosain",
};

const obj4 = {
  name: "Nityam",
  surname: "Gosain",
};
console.log(obj3 == obj4); //false
console.log(obj3 === obj4); //false

var products = [{ sa: "a" }];
products.map((value) => {
  console.log(value.state); 
});

// undefined

var products = [{}];
products.map((value) => {
  console.log(value.state);
});

//undefine

var products = ["a", { state: "b" }];
products.map((value) => {
  console.log(value.state.s);
});

//undefined;
// b;

var products = [{ state: "b" }, "a", { state: "b" }];
products.map((value) => {
  console.log(value.state);
});

//b;
//undefined;
//b;

