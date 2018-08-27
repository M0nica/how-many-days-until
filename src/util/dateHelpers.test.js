import { LocalDate } from "js-joda";
import {
  getNextYear,
  getFirstDayNextYear,
  getDaysUntilNextYear,
  checkNYE
} from "./dateHelpers";

describe("utcDateStringFromAttributes", () => {
  it("getNextYear(today) returns the next calendar year", () => {
    const expected = 2020;
    const today = LocalDate.parse("2019-02-23");
    expect(getNextYear(today)).toEqual(expected);
  });
  it("getFirstDayNextYear(today) returns Jan 1 of the next year", () => {
    const expected = LocalDate.of(2016, 1, 1);
    const today = LocalDate.of(2015, 2, 23);
    expect(getFirstDayNextYear(getNextYear(today))).toEqual(expected);

    const alt_expected = LocalDate.of(2017, 1, 1);
    expect(getFirstDayNextYear(2017)).toEqual(alt_expected);
  });

  it("getDaysUntilNextYear(today) return correct number of days between todays and New Years", () => {
    const expected = 128;
    const today = LocalDate.of(2018, 8, 26);
    const firstDayNextYear = LocalDate.of(2019, 1, 1);
    expect(getDaysUntilNextYear(today, firstDayNextYear)).toEqual(expected);

    const nyeExpected = 1;
    const nye = LocalDate.of(2018, 12, 31);
    expect(getDaysUntilNextYear(nye, firstDayNextYear)).toEqual(nyeExpected);
  });

  it("checkNYE should return true if only 1 day until New Years", () => {
    expect(checkNYE(1)).toBeTruthy();
  });

  it("checkNYE should return false if more than 1 day until New Years", () => {
    expect(checkNYE(2)).toBeFalsy();
  });
});
