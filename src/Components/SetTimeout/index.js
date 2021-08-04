import React, { Fragment } from "react";

const SetTimeout = () => {
  function cb() {
    console.log("Call back with timeout");
  }
  setTimeout(cb, 4000);

  function a () {console.log('50000')}
  setInterval(a,5000) //both wait for 5 sec after that only only they will console
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
