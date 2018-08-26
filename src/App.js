import React from "react";
import "./App.css";

import { isNYE, nextYear, daysUntilNextYear } from "util/dateHelpers";

class App extends React.Component {
  render() {
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
