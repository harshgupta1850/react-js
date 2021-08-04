import React, { createContext, Fragment } from "react";
import ComponentB from "./ComponentB";

const FirstName = createContext();
const LastName = createContext();

const ComponentA = () => {
  return (
    <Fragment>
      <h1>Component A</h1>
      <FirstName.Provider value={"harsh"}>
        <LastName.Provider value={"gupta"}>
          <ComponentB />
        </LastName.Provider>
      </FirstName.Provider>
    </Fragment>
  );
};

export default ComponentA;
export { FirstName, LastName };
