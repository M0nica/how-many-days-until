// @flow

import { LocalDate, ChronoUnit } from "js-joda";

export function getToday(): LocalDate {
  return LocalDate.now();
}

export function getDateOf(date): LocalDate {
  return LocalDate.parse(date);
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
