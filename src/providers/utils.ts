const checkIfCurrentDateIsValid = (currentDate?: string) => {
  if (!currentDate) return false;
  const date = new Date(currentDate);
  return !isNaN(date.getTime());
};

const checkIfReminderIdIsValid = (reminderId?: string) => {
  return reminderId?.length === 36;
};

const validateParameter = {
  currentDate: checkIfCurrentDateIsValid,
  reminderId: checkIfReminderIdIsValid,
};

export { validateParameter }