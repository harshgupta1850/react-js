import React, { Fragment } from "react";

const Functions = () => {
  //function statement or function declarartion
  a(); //  a called
  function a() {
    console.log("a callled");
  }

  //function expression
  //   b() give error b is undefined
  var b = function () {
    console.log("b called");
  };
  b(); //b called

  //anonymous function function without name , dose not have own identity, function statement require name ,
  // used where function are used as value cant use function statement in anonyums
  //   function () {
  //   }

  //named function expressions
  var x = function xyz() {
    console.log("xyx is callled");
  };
  //   xyz() // gives error xyz not defined
  x(); // xyz called

  // parameter and argument
  function arugumentFunction(param1, param2) {
    console.log(param1, param2, "argument function");
  }
  arugumentFunction("argument1", "argument2");

  //First class function or first class citizens
  // function can be treted as value ,
  // passing function inside other function as argument, we can return function from function
  // ability of function used as value name as first class function
  function firstClass(param1) {
    console.log(param1, "first class");
  }
  firstClass(x);  
  
  //main return
  return (
    <Fragment>
      <h1>Functions</h1>
    </Fragment>
  );
};

export default Functions;
