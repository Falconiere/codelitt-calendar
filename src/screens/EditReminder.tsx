import { format } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";

import { useGetDateFromUrl } from "hooks";
import { Reminder, useReminderStore } from "store";
import { CalendarDay } from "domains/calendar/utils";
import { Calendar } from "domains/calendar/containers";
import { ReminderForm } from "domains/reminder/containers";
import { Layout } from "layout";
import { ROUTES } from "router";
import { getEditRoute, getListRoute } from "router/routes";
import { ReminderModalRemove } from "domains/reminder/components";
import { useState } from "react";

const EditReminder = () => {
  const date = useGetDateFromUrl();
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const { reminderId } = useParams<{ reminderId: string }>();
  const navigate = useNavigate();

  const { editReminder, reminder, deleteReminder } = useReminderStore(
    ({ editReminder, getReminderById, deleteReminder }) => ({
      editReminder,
      reminder: reminderId ? getReminderById(reminderId) : undefined,
      deleteReminder,
    })
  );

  const onSave = (data: Reminder) => {
    editReminder(data);
    const remindersDate = format(new Date(data.date), "yyyy-MM-dd");
    navigate(getListRoute(remindersDate));
  };

  const onRemove = () => {
    if (!reminderId) return;
    deleteReminder(reminderId);
    // go to the current date if the reminder was deleted
    navigate(getListRoute(format(date, "yyyy-MM-dd")));
  };

  const onDayClick = ({ date: day }: CalendarDay) => {
    if (!reminderId) return;
    const remindersDate = format(day, "yyyy-MM-dd");
    const url = getEditRoute(remindersDate, reminderId);
    navigate(url);
  };

  return (
    <>
      <Layout.Content
        calendarContent={<Calendar onDayClick={onDayClick} />}
        reminderContent={
          <div className="flex flex-col items-center justify-center gap-4 h-full w-full mx-auto">
            <p className="text-left flex w-full text-2xl">
              Edit reminder - {format(date, "iiii, MMMM d, yyyy")}
            </p>
            <ReminderForm
              onSubmit={onSave}
              onCancel={() => navigate(ROUTES.HOME)}
              values={{
                ...reminder,
                date: format(date, "MM/dd/yyyy"),
              }}
              onRemove={() => setIsRemoveModalOpen(true)}
            />
          </div>
        }
      />
      <ReminderModalRemove
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
        onRemove={() => onRemove()}
      />
    </>
  );
};
export { EditReminder };
