import { daysOfTheWeek } from "constants/calendar";

const CalendarWeek = () => (
  <>
    {daysOfTheWeek.map((day) => (
      <div
        key={day}
        className="text-center text-[12px] font-extrabold text-white"
      >
        {day}
      </div>
    ))}
  </>
);

export { CalendarWeek };
