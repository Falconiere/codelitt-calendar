type ValidateEnteredTime = {
    date: Date;
    time: string;
}
const validateEnteredTime = ({date, time}:ValidateEnteredTime) => {
  const [hours, minutes] = time.split(':');
  const dateWithTime = new Date(date.setHours(Number(hours), Number(minutes)));
  const now = new Date();
  return dateWithTime > now || "Time must be in the future";;
}

export { validateEnteredTime }