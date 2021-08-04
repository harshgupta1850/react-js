import React, { Fragment, useContext } from "react";
import ComponentC from "./ComponentC";
import { FirstName, LastName } from "./ComponentA";

const ComponentB = () => {
  const fname = useContext(FirstName)
  const lname = useContext(LastName)
  console.log()
  return (
    <Fragment>
      <h1>Component B {fname}{lname}</h1>
      <ComponentC />
    </Fragment>
  );
};

export default ComponentB;
