import { BOOKING, REMOVEROW } from "./actionTypes";

const initialState = {
  value: 0,
  row: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      return {
        ...state,
        row:
          state.row.length < 3
            ? [...state.row, { row: action.payload }]
            : [...state.row],
      };
    case REMOVEROW:
      return {
        ...state,
        row: state.row.filter((vlu, index) => action.payload !== index),
      };

    default:
      return state;
  }
};

export default bookingReducer;
