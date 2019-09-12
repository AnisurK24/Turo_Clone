

import {RECEIVE_CAR_ERRORS, RECEIVE_CAR} from '../actions/car_actions';




export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAR_ERRORS:
      return action.errors;
    case RECEIVE_CAR:
      return [];
    default:
      return state;
  }
};
