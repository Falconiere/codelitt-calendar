type CalendarDay = {
  date: Date;
  isToday: boolean;
  isPrevMonth: boolean;
};

type GetAllDaysForFromMonth = CalendarDay[];


const getAllDaysForFromMonth = (
  month: number,
  year: number
): GetAllDaysForFromMonth => {
  const date = new Date(year, month, 1);
  const days = [];
  
  while (date.getMonth() === month) {
    days.push({
      date: new Date(date),
      isToday: date.toDateString() === new Date().toDateString(),
      isPrevMonth: false,
    });
    date.setDate(date.getDate() + 1);
  }

  const firstDayOfTheMonth = days[0].date.getDay();

  if (firstDayOfTheMonth !== 0) {
    for (let i = 0; i < firstDayOfTheMonth; i++) {
      days.unshift({
        date: new Date(year, month, -i),
        isToday: false,
        isPrevMonth: true,
      });
    }
  }
  return days;
};

export type { CalendarDay, GetAllDaysForFromMonth }
export { getAllDaysForFromMonth }