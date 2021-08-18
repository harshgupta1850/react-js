import React, { Fragment } from "react";

const Closures = () => {
  //data hiding
  function counter() {
    var count = 0;
    return function incrementCounter() {
      count++;
      console.log(count, "count hai ");
      //    console.log(setTimeout(count,0), "counter");
    };
  }
  counter()();
  counter()();

  //using constructor
  function constructorCounter() {
    var count = 0;
    this.increase = function () {
      count++;
      console.log(count, "new + count");
    };
    this.decrease = function () {
      count--;
      console.log(count, "new count --");
    };
  }

  const counter1 = new constructorCounter();
  counter1.increase();
  counter1.increase();
  counter1.decrease();

  //simple closure function
  const closureFunction = () => {
    var a = 7;
    function y() {
      return <h1>{a}</h1>;
    }
    return y();
  };

  //nested closure
  function outest() {
    let value = 20000;
    var c = 1000;
    function outer(x) {
      // let have block scope
      // var value = 10;
      console.log(x, c, "x and c");
      let value = 10;
      function inner() {
        console.log(value, x, c, "value and c and x");
      }
      value = 20;
      return inner;
    }
    return outer;
  }
  // two parenthis calling inner function
  // outer()()
  const run = outest();
  run(3)();

  //garbage collector
  function garbage() {
    var a = 0;
    return function b() {
      console.log(a, "garbage");
    };
  }
  garbage()();

  const add = (function () {
    let counter = 0
    return function () {
    counter+=1 
    return counter
    }
    })()
    
    console.log(add())
    console.log(add())
    

  //main return
  return (
    <Fragment>
      <h1>Closures</h1>
      {closureFunction()}
    </Fragment>
  );
};

export default Closures;
