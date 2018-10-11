// @flow

import React from "react";
import "./App.css";

import {
  checkNYE,
  getToday,
  getNextYear,
  getDateOf,
  getFirstDayNextYear,
  getDaysUntilNextYear
} from "./util/dateHelpers.js";
import { LocalDate, Year } from "js-joda";


class App extends React.PureComponent<*> {
  state = {date: '', daysUntilNextYear: 0, nextYear: ''}

  componentWillMount = () => {
    let date: LocalDate = getToday();
    this.setState({date: date});
    this.daysUntilNextYear(date);
  }

  dateHandler = (event) => {
    let date: LocalDate = getDateOf(event.target.value)
    this.daysUntilNextYear(date)
  }

  daysUntilNextYear = (date) => {
    const nextYear: Year = getNextYear(date);
    const firstDayNextYear: LocalDate = getFirstDayNextYear(nextYear);
    const daysUntilNextYear: number = getDaysUntilNextYear(date, firstDayNextYear);

    this.setState({date: date, daysUntilNextYear: daysUntilNextYear, nextYear: nextYear})
  }
  

  render(): ?React$Element<*> {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> When will it be {this.state.nextYear}?</h1>
        </header>

        {!checkNYE(this.state.daysUntilNextYear) ? (
          <div>
          <a>Date: </a><input type="date" id="date" defaultValue={this.state.date} min="2018-01-01" max="2018-12-31" onChange={(event)=>this.dateHandler(event)}></input>
          <p>
            It will be {this.state.nextYear} in {this.state.daysUntilNextYear} days!
          </p>
          </div>
        ) : (
          <p>It's New Years Eve and {this.state.nextYear} starts tomorrow!</p>
         
        )}
      </div>
    );
  }
}

export default App;
