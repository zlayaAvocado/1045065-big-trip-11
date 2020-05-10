import {MONTH_NAMES} from '../utils/constants.js';
import AllMighty from './allmighty.js';

export const returnTripDayDetails = (tripEvent, counter) => {
  let {startDay, startMonth, startYear} = tripEvent.startDates;
  const startMonthShort = MONTH_NAMES[startMonth - 1];

  return `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${counter}</span>
      <time class="day__date" datetime="${startYear}-${startMonth}-${startDay}">${startMonthShort} ${startDay}</time>
    </div>

    <ul class="trip-events__list">
    </ul>
  </li>`;
};

export default class TripDayDetails extends AllMighty {
  constructor(tripEvent, counter) {
    super();
    this._tripEvent = tripEvent;
    this._counter = counter;
  }

  getTemplate() {
    return returnTripDayDetails(this._tripEvent, this._counter);
  }
}
