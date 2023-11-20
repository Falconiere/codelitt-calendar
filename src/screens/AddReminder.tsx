import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Layout } from "layout";
import { useGetDateFromUrl } from "hooks";
import { Reminder, useReminderStore } from "store";
import { CalendarDay } from "domains/calendar/utils";
import { Calendar } from "domains/calendar/containers";
import { ReminderForm } from "domains/reminder/containers";
import { getAddRoute, getListRoute } from "router/routes";

const AddReminder = () => {
  const date = useGetDateFromUrl();
  const navigate = useNavigate();
  const addReminder = useReminderStore((state) => state.addReminder);

  const onSubmit = (data: Reminder) => {
    addReminder(data);
    navigate(getListRoute(format(new Date(data.date), "yyyy-MM-dd")));
  };

  const onDayClick = ({ date: day }: CalendarDay) => {
    navigate(getAddRoute(format(day, "yyyy-MM-dd")));
  };

  return (
    <Layout.Content
      reminderContent={
        <div className="flex flex-col items-center justify-center gap-4 h-full w-full mx-auto">
          <p className="text-left flex w-full text-2xl">
            Add reminder - {format(date, "iiii, MMMM d, yyyy")}
          </p>
          <ReminderForm
            onSubmit={onSubmit}
            values={{
              date: format(date, "MM/dd/yyyy"),
            }}
            onCancel={() => navigate(-1)}
          />
        </div>
      }
      calendarContent={<Calendar onDayClick={onDayClick} />}
    />
  );
};
export { AddReminder };
