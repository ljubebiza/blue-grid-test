export const FormatDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();
  let month = months[d.getMonth()];

  let date =
    d.getDate() +
    "." +
    month +
    "." +
    d.getFullYear() +
    ". " +
    d.getHours() +
    ":" +
    d.getMinutes();
  return date;
};
