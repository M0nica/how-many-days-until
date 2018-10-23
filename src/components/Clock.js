import React, { Component } from "react";
import { LocalTime, ChronoUnit } from "js-joda";

export default class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = { time: LocalTime.now().truncatedTo(ChronoUnit.SECONDS) };
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
      time: LocalTime.now().truncatedTo(ChronoUnit.SECONDS)
    });
  }

  render(): ?React$Element<*> {
    return (
      <div>
        <p className="clock">{this.state.time.toString()}</p>
      </div>
    );
  }
}
