import AllMighty from './allmighty.js';

const returnTripCost = () => (`<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>`);

export default class TripCost extends AllMighty {
  getTemplate() {
    return returnTripCost();
  }
}
