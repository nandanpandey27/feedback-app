import { combineReducers } from "@reduxjs/toolkit";
import feedbackReducer from "./feedbacks.reducer";
import authReducer from "./auth.reducer";

export default combineReducers({
  feedbacks: feedbackReducer,
  auth: authReducer,
});
