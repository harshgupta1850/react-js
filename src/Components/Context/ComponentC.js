import React, { Fragment } from "react";
import { FirstName, LastName } from "./ComponentA";

const ComponentC = () => {
  return (
    <Fragment>
      <FirstName.Consumer>
        {(name) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    {name}
                    {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </Fragment>
  );
};

export default ComponentC;
