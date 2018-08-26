import { LocalDate, ChronoUnit } from "js-joda";

export const today = LocalDate.now();
export const nextYear = today.year() + 1;
export const firstDayNextYear = LocalDate.of(nextYear, 1, 1);
export const daysUntilNextYear = today.until(firstDayNextYear, ChronoUnit.DAYS);
export const isNYE = Boolean(daysUntilNextYear <= 1);
