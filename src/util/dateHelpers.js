// @flow

import { LocalDate, ChronoUnit, Month } from "js-joda";

export function getToday(): LocalDate {
  return LocalDate.now();
}

export function getDayOfWeek(): DayOfWeek {
  return capitalizeFirstLetter(getToday().dayOfWeek().toString().toLowerCase());
}

export function getMonth(): Month {
  return capitalizeFirstLetter(getToday().month().toString().toLowerCase());
}

export function getDayOfMonth(): LocalDate {
  const dayNum = getToday().dayOfMonth().toString();
  return dayNum + nth(dayNum);
}

export function getFormattedDate(): string {
  return `${getDayOfWeek()}, ${getMonth()} ${getDayOfMonth()}`;
}

function nth(d: number): string {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
  case 1: return "st";
  case 2: return "nd";
  case 3: return "rd";
  default: return "th";
  }
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
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

export function getChristmasDay(date: LocalDate): number {
  return LocalDate.parse("2018-12-25");
}

export function getDaysUntilChristmas(
  today: LocalDate,
  christmasDay: LocalDate
): number {
  return today.until(christmasDay, ChronoUnit.DAYS);
}

export function checkChristmas(getDaysUntilChristmas: number): boolean {
  return Boolean(getDaysUntilNextYear === 1);
}