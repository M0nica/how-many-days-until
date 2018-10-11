import React, { Component } from "react";
import { getDayOfWeek, getMonth, getDayOfMonth } from "../util/dateHelpers.js";

export default class Today extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(): ?React$Element<*> {
    return (
      <div>
        <h2 className="today-title">Today is {getDayOfWeek()}, {getMonth()} {getDayOfMonth()}</h2>
        <p className="clock">{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
