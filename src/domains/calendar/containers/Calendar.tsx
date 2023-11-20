import { useState } from "react";
import { CalendarDay, getAllDaysForFromMonth } from "domains/calendar/utils";
import { useGetDateFromUrl } from "hooks/useGetDateFromUrl";
import { monthsOfTheYear } from "constants/calendar";

import {
  CalendarHeader,
  CalendarMonth,
  CalendarNav,
  CalendarWeek,
} from "domains/calendar/components";

type CalendarProps = {
  onDayClick: (date: CalendarDay) => void;
};

const Calendar = ({ onDayClick }: CalendarProps) => {
  const currentDate = useGetDateFromUrl();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getUTCMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const days = getAllDaysForFromMonth(currentMonth, currentYear);
  const monthName = monthsOfTheYear[currentMonth];

  const onNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const onPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  return (
    <div className="flex flex-col items-center gap-8">
      <CalendarHeader year={currentYear} month={monthName} />
      <CalendarNav onNext={onNextMonth} onPrev={onPrevMonth} />
      <div className="grid grid-cols-7 gap-[10px] min-h-[330px]">
        <CalendarWeek />
        <CalendarMonth
          days={days}
          onDayClick={onDayClick}
          selectedDate={currentDate}
        />
      </div>
    </div>
  );
};
export { Calendar };
