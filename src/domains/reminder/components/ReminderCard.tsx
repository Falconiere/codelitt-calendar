import { reminderColors } from "constants/reminderColors";
import { Reminder } from "store/useReminderStore";

import { ReactComponent as Clock } from "assets/icons/clock.svg";
import { ReactComponent as Pencil } from "assets/icons/pencil.svg";
import { Button } from "components/Button";
import { format } from "date-fns";
import { getEditRoute } from "router/routes";

type ReminderCardProps = {
  reminder: Reminder;
};
const ReminderCard = ({ reminder }: ReminderCardProps) => {
  const color = reminderColors[reminder.colorIndex];
  const date = new Date(reminder.date);
  return (
    <div className="grid sm:grid-cols-[calc(100%-150px),150px]  bg-white shadow-cardShadow rounded-2xl relative sm:min-h-[135px] ">
      <div className="flex p-4 gap-4 w-full items-center">
        <div
          style={{ backgroundColor: color }}
          className="flex min-h-full min-w-[12px] rounded-full"
        />
        <div className="overflow-hidden">
          <p className="text-sm font-semibold text-grey">{reminder.title}</p>
          <p className="text-sm sm:text-lg font-semibold text-darkerGray text-ellipsis">
            {reminder.description}
          </p>
        </div>
      </div>
      <div className="flex sm:flex-col items-center border-l-[1px] border-lightGray p-4 my-auto">
        <Clock />
        <p className="text-4xl font-semibold text-grey">{reminder.time}</p>
      </div>
      {reminder.id ? (
        <Button
          variant="edit"
          as="a"
          href={getEditRoute(format(date, "yyyy-MM-dd"), reminder.id)}
          className="absolute right-0 bottom-[-16px]"
        >
          <Pencil />
        </Button>
      ) : null}
    </div>
  );
};
export { ReminderCard };
