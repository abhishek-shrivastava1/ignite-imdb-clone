const currentFullYear = new Date().getFullYear();
const currentMonth =
  new Date().getMonth() + 1 < 10
    ? `0${new Date().getMonth()}`
    : new Date().getMonth();
const currentDate =
  new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();

export const currentISODate = `${currentFullYear}-${currentMonth}-${currentDate}`;

export const currentISODatePreviousYear = `${
  currentFullYear - 1
}-${currentMonth}-${currentDate}`;

export const currentISODateNextYear = `${
  currentFullYear - 1
}-${currentMonth}-${currentDate}`;
