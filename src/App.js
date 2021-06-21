import React, { Fragment } from "react";
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

const App = () => {
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
        </Switch>
      </Fragment>
    </Router>
    // </OptimizelyProvider>
  );
};

export default App;
