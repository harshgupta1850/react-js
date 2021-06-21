import React, { Fragment, useEffect } from "react";

const CallBackAndEvents = () => {
  //callback function
  // function passed in another function
  // js is single thread langauge
  setTimeout(() => {
    console.log("timer");
  }, 5000);
  function x(param) {
    console.log("x calling");
    param();
  }
  x(function y() {
    console.log("y calling");
  }); // y is call back

  let count = 0
  const buttonClick = () => {
    count++
    console.log(count,"Clicked");
  };



  useEffect(() => {
    document.getElementById("clickme").addEventListener("click", buttonClick);
  }, []);

  //main return
  return (
    <Fragment>
      <h1>Callback & event listeners</h1>
      <button id="clickme">Click Me</button>
    </Fragment>
  );
};

export default CallBackAndEvents;
