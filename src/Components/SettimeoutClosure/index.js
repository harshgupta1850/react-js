import React, { Fragment } from "react";

const SettimeoutClosure = () => {
  function x() {
    for (var i = 1; i <= 5; i++) {
        console.log(i)
        function close(x) {
            setTimeout(() => {
                console.log(x, `i${i}`); // 6 i6 .... 6times
                // console.log(Date());
                console.log(x * 1000);
              }, x * 1000);
        }
        close(i)
      //   console.log(i*2000,'outside')
    }
    console.log("Hello world");
  }
  x();

  //main return
  return (
    <Fragment>
      <h1>Settimeout + Closure</h1>
    </Fragment>
  );
};

export default SettimeoutClosure;
