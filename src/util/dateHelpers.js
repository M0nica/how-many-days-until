// @flow

import { LocalDate, ChronoUnit } from "js-joda";

export function getToday(): LocalDate {
  return LocalDate.now();
}

export function getNextYear(date: LocalDate): number {
  return date.year() + 1;
}

export function getFirstDayNextYear(nextYear: number): LocalDate {
  return LocalDate.of(nextYear, 1, 1);
}

export function getDaysUntilNextYear(
  today: LocalDate,
  firstDayNextYear: LocalDate
): number {
  return today.until(firstDayNextYear, ChronoUnit.DAYS);
}

export function checkNYE(getDaysUntilNextYear: number): boolean {
  return Boolean(getDaysUntilNextYear === 1);
}

export function getChristmasDay(): number {
  return LocalDate.parse("2018-12-25");
}

export function getDaysUntilChristmas(
  today: LocalDate,
  christmasDay: LocalDate
): number {
  return today.until(christmasDay, ChronoUnit.DAYS);
}

export function checkChristmas(): boolean {
  return Boolean(getDaysUntilNextYear === 1);
}