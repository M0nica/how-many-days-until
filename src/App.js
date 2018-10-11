// @flow

import React from "react";
import "./App.css";

import {
  checkNYE,
  getToday,
  getNextYear,
  getFirstDayNextYear,
  getDaysUntilNextYear
} from "./util/dateHelpers.js";
import { LocalDate, Year } from "js-joda";

const today: LocalDate = getToday();
const nextYear: Year = getNextYear(today);
const firstDayNextYear: LocalDate = getFirstDayNextYear(nextYear);
const daysUntilNextYear: number = getDaysUntilNextYear(today, firstDayNextYear);
const isNYE = checkNYE(daysUntilNextYear);
const forkMe = {
  position: "absolute",
  top: 0,
  right: 0,
  border: 0
};
class App extends React.PureComponent<*> {
  render(): ?React$Element<*> {
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://github.com/M0nica/how-many-days-until">
            <img style={forkMe} src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Fork me on GitHub"/>
          </a>
          <h1 className="App-title"> When will it be {nextYear}?</h1>
        </header>

        {!isNYE ? (
          <p>
            It will be {nextYear} in {daysUntilNextYear} days!
          </p>
        ) : (
          <p>It's New Years Eve and {nextYear} starts tomorrow!</p>
        )}
      </div>
    );
  }
}

export default App;
