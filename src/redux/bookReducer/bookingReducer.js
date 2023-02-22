import { BOOKING } from "./actionTypes";

const initialState = {
  value: 0,
  row: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      return {
        ...state,
        row: [...state.row],
      };

    default:
      return state;
  }
};

export default bookingReducer;
