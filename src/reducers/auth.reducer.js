import { ATTEMPT_AUTH, ATTEMPT_LOGOUT } from "./../constants/actionsTypes";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case ATTEMPT_AUTH:
      return { ...state, ...action.payload };
    case ATTEMPT_LOGOUT:
      return null;
    default:
      return state;
  }
};

export default authReducer;
