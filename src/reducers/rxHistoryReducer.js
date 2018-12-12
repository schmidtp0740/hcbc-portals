// Import action types
import {FETCHING_RX_HISTORY, FETCH_HISTORY_ERROR, FETCH_RX_HISTORY} from '../actions/types';

const INITIAL_STATE = {
    isFetching: false,
    rx: "",
    message: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case FETCHING_RX_HISTORY:
          return {
              ...state,
              isFetching: true,
              message: "Fetching Rx history."
          };
      case FETCH_RX_HISTORY:
          return {
              ...state,
              rx: action.payload,
              isFetching: false,
              message: "Rx history received."
          };
      case FETCH_HISTORY_ERROR:
          return {
              ...state,
              rx: action.payload,
              isFetching: false,
              message: "Rx history failed."
          };
    default:
      return state;
  }
};