import React, { Fragment, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Debouncing from "./Components/Debouncing";
import Closures from "./Components/Closures";
import SettimeoutClosure from "./Components/SettimeoutClosure";
import Functions from "./Components/Functions";
import CallBackAndEvents from "./Components/CallbackFunction";
import EventLoop from "./Components/EventLoop";
import SetTimeout from "./Components/SetTimeout";
import WAP from "./Components/WAP";
import Bubbling from "./Components/Bubbling&Capturing";
import Memo from "./Components/Memo";

const App = () => {
  // const [count, setCount] = useState(1);

  // const prevCountRef = useRef();
  // useEffect(() => {
  //   prevCountRef.current = count;
  // });
  // const prevCount = prevCountRef.current;

  // return (
  //   <h1>
  //     Now: {count}, before: {prevCount}
  //   </h1>
  // );
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/debouncing">
            <Debouncing />
          </Route>
          <Route exact path="/closures">
            <Closures />
          </Route>
          <Route exact path="/settimeout+closure">
            <SettimeoutClosure />
          </Route>
          <Route exact path="/functions">
            <Functions />
          </Route>
          <Route exact path="/callbacks">
            <CallBackAndEvents />
          </Route>
          <Route exact path="/eventloop">
            <EventLoop />
          </Route>
          <Route exact path="/setTimeout">
            <SetTimeout />
          </Route>
          <Route exact path="/WAP">
            <WAP />
          </Route>
          <Route exact path="/bubbling">
            <Bubbling />
          </Route>
          <Route exact path="/memo">
            <Memo />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
