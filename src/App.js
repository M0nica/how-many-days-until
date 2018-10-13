// @flow

import React, { Component } from "react";
import "./App.css";
import Christmas from "./Components/Christmas";
import NewYear from "./Components/NewYear";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/newyearseve" component={NewYear}></Route>
          <Route exact path="/christmas" component={Christmas}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;