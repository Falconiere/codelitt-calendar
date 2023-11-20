type CalendarHeaderProps = {
  year: number;
  month: string;
};
const CalendarHeader = ({ year, month }: CalendarHeaderProps) => (
  <div className="calendar-header text-center">
    <h1 className="text-8xl font-extrabold text-white">{year}</h1>
    <h4 className="text-5xl font-semibold text-white">{month}</h4>
  </div>
);

export { CalendarHeader };
