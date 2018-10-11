// @flow

import { LocalDate, ChronoUnit } from "js-joda";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function getToday(): LocalDate {
  return LocalDate.now();
}

export function getDayOfWeek(): LocalDate {
  return days[new Date().getDay()];
}

export function getMonth(): LocalDate {
  return months[new Date().getMonth()];
}

export function getDayOfMonth(): LocalDate {
  const dayNum = new Date().getDate();
  return dayNum + nth(dayNum);
}

function nth(d: number): number {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
  case 1: return "st";
  case 2: return "nd";
  case 3: return "rd";
  default: return "th";
  }
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
