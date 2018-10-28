// @flow

import React, { type Node } from "react";
import "./App.css";
import ViewOnGithub from "./Components/ViewOnGithub";
import NewYears from "./Components/NewYears";
import Christmas from "./Components/Christmas";

type State = {
  view: 'NewYears' | 'Christmas'
};

class App extends React.PureComponent<*, State> {
  state = { view: "NewYears" }

  switchView = (e: SyntheticInputEvent<*>) => {
    const { value } = e.target;
    if (value !== "Christmas" && value !== "NewYears") {
      // this should never happen outside of development mode
      throw new Error("Invalid option.");
    }
    this.setState({ view: value });
  }

  getView(): Node {
    switch (this.state.view) {
    case "NewYears":
      return <NewYears />;
    case "Christmas":
      return <Christmas />;
    }
  }

  render(): ?React$Element<*> {
    return (
      <div className="App">
        <header>
          <ViewOnGithub />
        </header>
        <main>
          {this.getView()}
          <section>
            <h3>When will it be:</h3>
            <select onChange={this.switchView} value={this.state.view}>
              <option value="NewYears">New Years</option>
              <option value="Christmas">Christmas</option>
            </select>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
