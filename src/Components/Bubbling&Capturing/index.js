import React, { Fragment, useEffect } from "react";

const Bubbling = () => {
  const onImgClick = () => console.log("image click");
  const onPClick = () => console.log("p click");
  const click1 = () => console.log("Click outer");
  const click2 = (event) => {
    //for stoping propogation
    // event.stopPropagation();
    console.log("Click inner");
  };

  // useEffect(() => {
  //   document.getElementById("msgbox").addEventListener(
  //     "submit",
  //     function (e) {
  //       console.log("heloo");
  //       e.preventDefault();
  //       var msg = e.currentTarget.getElementById("msg").value.trim();
  //       if (msg) {
  //         alert(msg);
  //       }
  //     },
  //     false
  //   );
  // },[]);

  const onGrandParent = () => console.log("Grand Parent");
  const onParent = () => console.log("Parent");
  const onChild = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    console.log("Chils");
  };

  const onListClick = (e) => {
    console.log(e.target.id);
  };

  //main return
  return (
    <Fragment>
      <h1>Bubbling</h1>

      <div
        onClick={onGrandParent}
        style={{ height: "200px", width: "200px", border: "2px solid red" }}
      >
        Grand parent
        <div
          onClick={onParent}
          style={{ height: "150px", width: "150px", border: "2px solid red" }}
        >
          Parent
          <div
            onClick={onChild}
            style={{ height: "100px", width: "100px", border: "2px solid red" }}
          >
            Child{" "}
          </div>
        </div>
      </div>
      <div onClick={onListClick}>
        <ul>
          <li value="camera" id="camera">
            Camera
          </li>
          <li value="laptop">Laptop</li>
          <li value="shoes">Shoes</li>
        </ul>
      </div>
      <p onClick={onPClick}>
        HI
        <button onClick={click1}>
          <button onClick={click2}>Hello</button>
          <img src="logo512.png" alt="123" onClick={onImgClick} />
        </button>
      </p>
      <form id="msgbox" action="google.com" method="get">
        <label for="msg">your message</label>
        <input id="msg" value="" />
        <button>SEND</button>
      </form>
    </Fragment>
  );
};

export default Bubbling;
