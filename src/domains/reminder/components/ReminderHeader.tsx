import { format } from "date-fns";

type ReminderHeaderProps = {
  currentDate: Date;
  children: React.ReactNode;
};

const ReminderHeader = ({ currentDate, children }: ReminderHeaderProps) => (
  <div className="grid grid-cols-2 sm:flex  sm:items-center sm:justify-between pb-4 gap-2">
    <p className="text-darkerGray font-medium text-sm sm:text-lg">
      {format(currentDate, "iiii, MMMM d, yyyy")}
    </p>
    {children}
  </div>
);

export { ReminderHeader };
