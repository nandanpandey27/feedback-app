import { CREATE_FEEDBACK } from "./../constants/actionsTypes";

const feedbackReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_FEEDBACK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default feedbackReducer;
