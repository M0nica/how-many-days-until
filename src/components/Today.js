import React, { Component } from "react";
import Clock from "./Clock";
import { getFormattedDate } from "../util/dateHelpers.js";

export default class Today extends Component {
  render(): ?React$Element<*> {
    return (
      <div>
        <h2 className="today-title">Today is {getFormattedDate()}</h2>
        <Clock />
      </div >
    );
  }
}
