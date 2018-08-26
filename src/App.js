import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LocalDate, ChronoUnit } from "js-joda";

class App extends React.Component {
  render() {
    const today = LocalDate.now();
    const nextYear = today.year() + 1;
    const firstDayNextYear = LocalDate.of(nextYear, 1, 1);

    const daysUntilNextYear = today.until(firstDayNextYear, ChronoUnit.DAYS);

    const isNYE = Boolean(daysUntilNextYear <= 1);
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
