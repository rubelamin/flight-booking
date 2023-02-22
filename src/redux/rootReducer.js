import { combineReducers } from "redux";
import bookingReducer from "./bookReducer/bookingReducer";

const rootReducer = combineReducers({
  booked: bookingReducer,
});

export default rootReducer;
