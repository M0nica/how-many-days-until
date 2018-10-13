// @flow
import React, { Component, Fragment, type Element } from "react";
import "./styles.css";

import {
  checkNYE,
  getToday,
  getNextYear,
  getFirstDayNextYear,
  getDaysUntilNextYear
} from "../../util/dateHelpers.js";
import { LocalDate, Year } from "js-joda";

const today: LocalDate = getToday();
const nextYear: Year = getNextYear(today);
const firstDayNextYear: LocalDate = getFirstDayNextYear(nextYear);
const daysUntilNextYear: number = getDaysUntilNextYear(today, firstDayNextYear);
const isNYE = checkNYE(daysUntilNextYear);

export default class NewYears extends Component<{}> {
  render(): Element<typeof Fragment> {
    return (
      <Fragment>
        <h1>When will it be {nextYear}?</h1>
        <section className="message">
          {!isNYE ? (
            <p>
              It will be {nextYear} in {daysUntilNextYear} days!
            </p>
          ) : (
            <p>It's New Years Eve and {nextYear} starts tomorrow!</p>
          )}
        </section>
      </Fragment>
    );
  }
}
