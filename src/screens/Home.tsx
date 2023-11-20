import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useGetDateFromUrl } from "hooks";
import { useReminderStore } from "store";
import { CalendarDay } from "domains/calendar/utils";
import { ReminderHeader } from "domains/reminder/components";
import { Button } from "components";
import { ReminderList } from "domains/reminder/containers";
import { Calendar } from "domains/calendar/containers";
import { Layout } from "layout";
import { getAddRoute, getListRoute } from "router/routes";

const Home = () => {
  const date = useGetDateFromUrl();
  const navigate = useNavigate();
  const reminders = useReminderStore((state) => state.filterReminders(date));

  const onDayClick = ({ date: day }: CalendarDay) => {
    navigate(getListRoute(format(day, "yyyy-MM-dd")));
  };

  return (
    <Layout.Content
      reminderContent={
        <>
          <ReminderHeader currentDate={date}>
            <Button
              as="a"
              href={getAddRoute(format(date, "yyyy-MM-dd"))}
              variant="tertiary"
            >
              Add reminder
            </Button>
          </ReminderHeader>
          <ReminderList reminders={reminders} />
        </>
      }
      calendarContent={<Calendar onDayClick={onDayClick} />}
    />
  );
};

export { Home };
