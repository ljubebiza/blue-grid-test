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
  let hh = d.getHours();
  let mm = d.getMinutes();
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  let date =
    d.getDate() + "." + month + "." + d.getFullYear() + ". " + hh + ":" + mm;
  return date.toString();
};
