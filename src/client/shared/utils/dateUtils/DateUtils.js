export function daysBetween(from, to) {
  const fromDate = new Date(from);
  const toDate = new Date(to);

  const ONE_DAY = 1000 * 60 * 60 * 24;
  const differenceMs = Math.abs(fromDate - toDate);

  return Math.round(differenceMs / ONE_DAY);
}

export function getFutureDate(date, days) {
  return new Date(date.getTime() + 24 * 60 * 60 * 1000 * days);
}

export function getISODateWithoutTime(date) {
  return date.toISOString().split('T')[0];
}

export const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};
