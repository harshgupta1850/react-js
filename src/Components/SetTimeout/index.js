import React, { Fragment } from "react";

const SetTimeout = () => {
  function cb() {
    console.log("Call back with timeout");
  }
  setTimeout(cb, 4000);
//   console.log
  let todayDate= new Date().getTime()
  let endDate = todayDate
  console.log(endDate)
  const buttonClick = () =>{
    while(endDate<todayDate+10000){
        console.log(endDate,'inside')
        endDate = new Date().getTime()
      }
      console.log('while expires')
  } 
 
  //main return
  return (
    <Fragment>
      <h1>Set Timeout</h1>
      <button onClick={buttonClick}>Click</button>
    </Fragment>
  );
};

export default SetTimeout;
