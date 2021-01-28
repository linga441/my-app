import { DateTime } from "luxon";

function dateUtcToLocal(date) {
  if (!date) {
    return "";
  }
  const dt = new Date(date);
  
  return dt === "Invalid Date"
    ? ""
    : DateTime.fromJSDate(dt).toFormat("MMM dd yyyy HH:mm");
}

export { dateUtcToLocal };
