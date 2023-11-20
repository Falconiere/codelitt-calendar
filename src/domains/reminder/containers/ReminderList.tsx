import { Reminder } from "store";
import { EmptyState, ReminderCard } from "domains/reminder/components";

type ReminderProps = {
  reminders: Reminder[];
};
const ReminderList = ({ reminders }: ReminderProps) =>
  reminders.length ? (
    <div className="h-[calc(100vh-300px)]  max-h-[600px] overflow-y-auto">
      <div className="px-4 py-6 sm:py-10 sm:px-8 flex flex-col gap-8 ">
        {reminders.map((reminder) => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))}
      </div>
    </div>
  ) : (
    <EmptyState />
  );

export { ReminderList };
