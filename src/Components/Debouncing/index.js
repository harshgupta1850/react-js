import React, { Fragment } from "react";

const Debouncing = () => {
  var counter = 0;
  let timer;
  const debounce = (fn, time) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, time);
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    debounce(fetchData, 1000);
  };

  const fetchData = () => {
    console.log("fetching data.....", counter++);
  };

  return (
    <Fragment>
      <h1>Debouncing</h1>
      <input type="text" onChange={onInputChange} />
      <h1>Throttling</h1>
    </Fragment>
  );
};

export default Debouncing;
