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

class App extends React.PureComponent<*> {
  render(): ?React$Element<*> {
    return (
      <div className="App">
        <header className="App-header">
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
