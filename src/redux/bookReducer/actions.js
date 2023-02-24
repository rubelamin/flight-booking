import { BOOKING, REMOVEROW } from "./actionTypes";

export const bookingClicked = (rowData) => {
  return {
    type: BOOKING,
    payload: rowData,
  };
};

export const removeClicked = (indexId) => {
  return {
    type: REMOVEROW,
    payload: indexId,
  };
};
