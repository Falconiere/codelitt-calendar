import { cn } from "utils/tailwind/cn";
import { ReactComponent as Bullet } from "assets/icons/bullet-indicator.svg";
import { CalendarDay } from "domains/calendar/utils";
import { useReminderStore } from "store";
import { Button } from "components";

type CalendarMonthProps = {
  onDayClick?: (date: CalendarDay) => void;
  days: CalendarDay[];
  selectedDate?: Date;
};

const isSameDay = (a: Date, b: Date) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};
const CalendarMonth = ({
  days,
  onDayClick,
  selectedDate,
}: CalendarMonthProps) => {
  const count = useReminderStore((state) => state.count);

  return (
    <>
      {days.map(({ date, isPrevMonth, isToday }) => (
        <Button
          key={date.getTime()}
          onClick={() =>
            !isPrevMonth ? onDayClick?.({ date, isPrevMonth, isToday }) : null
          }
          type="button"
          variant={
            selectedDate && isSameDay(selectedDate, date) ? "tertiary" : "text"
          }
          className={cn(
            "relative text-center text-lg font-medium text-white rounded-full w-[42px] h-[42px] p-[10px] flex items-center justify-center shadow-0",
            {
              "cursor-default": isPrevMonth,
              "opacity-0": isPrevMonth,
            }
          )}
        >
          {date.getDate()}
          {count(date) > 0 ? (
            <div className=" absolute top-2 right-1 flex items-center">
              <Bullet />
            </div>
          ) : null}
        </Button>
      ))}
    </>
  );
};

export { CalendarMonth };
