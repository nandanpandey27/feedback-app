import { CREATE_FEEDBACK } from "./../constants/actionsTypes";

export const createFeedback = (feedback) => (dispatch) => {
  dispatch({
    type: CREATE_FEEDBACK,
    payload: feedback,
  });
};
