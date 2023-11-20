const validateEnteredDate = (value: string) => {
  const date = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today || "Date must be in the future";
}
export { validateEnteredDate }