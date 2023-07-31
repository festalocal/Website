import dayjs from "dayjs";

/**
 *
 * @param { number } month
 * @param { number } year
 * @returns {any[]}
 */
export const generateDate: Function = (
  month: number = dayjs().month(),
  year: number = dayjs().year()
): any[] => {
  const firstDateOfMonth: dayjs.Dayjs = dayjs()
    .year(year)
    .month(month)
    .startOf("month");
  const lastDateOfMonth: dayjs.Dayjs = dayjs()
    .year(year)
    .month(month)
    .endOf("month");

  // Array that contains all the dates for the calendar container
  const dates = [];

  // computing prefix dates before the first day of the current month
  for (let i: number = 0; i < firstDateOfMonth.day(); i++) {
    dates.push({
      currentMonth: false,
      date: firstDateOfMonth.day(i),
      today: false,
    });
  }
  // Adding all the actual dates of the month
  for (
    let i: number = firstDateOfMonth.date();
    i <= lastDateOfMonth.date();
    i++
  ) {
    dates.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i),
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }
  // computing suffix dates after the last day of the current month
  for (let i: number = 0; i < 6 - lastDateOfMonth.day(); i++) {
    dates.push({ currentMonth: false, date: lastDateOfMonth.day(i) });
  }
  return [dates];
};
