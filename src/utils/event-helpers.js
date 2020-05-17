import moment from "moment";

export const returnEventDates = (dateFrom, dateTo) => {
  const startDate = moment(dateFrom);
  const endDate = moment(dateTo);
  const startDateWithDash = startDate.format(`YYYY-MM-DD`);
  const endDateWithDash = endDate.format(`YYYY-MM-DD`);
  const startDateWithSlash = startDate.format(`YYYY/MM/DD`);
  const endDateWithSlash = endDate.format(`YYYY/MM/DD`);
  const startTime = startDate.format(`HH:mm`);
  const endTime = endDate.format(`HH:mm`);
  const shortDate = startDate.format(`MMM DD`);
  const duration = moment.duration(endDate.diff(startDate));
  let durationDays = duration._data.days;
  durationDays === 0 ? durationDays = `` : durationDays + `D`;
  const durationHours = duration._data.hours;
  const durationMinutes = duration._data.minutes;

  return {startDateWithDash, endDateWithDash, startDateWithSlash, endDateWithSlash, shortDate,
    startTime, endTime, durationDays, durationHours, durationMinutes};
};

export const addArticleToEventType = (eventType, allEventTypes) => {
  const LAST_INDEX_OF_TRANSPORT_EVENT = 6;
  if (allEventTypes.indexOf(eventType) > LAST_INDEX_OF_TRANSPORT_EVENT) {
    eventType = eventType + ` in`;
  } else {
    eventType = eventType + ` to`;
  }
  return eventType;
};
