import { ATTEMPT_AUTH, ATTEMPT_LOGOUT } from "./../constants/actionsTypes";

export const attemptAuth = (auth) => (dispatch) => {
  dispatch({
    type: ATTEMPT_AUTH,
    payload: auth,
  });
};

export const attemptLogout = (auth) => (dispatch) => {
  localStorage.removeItem("auth");
  dispatch({
    type: ATTEMPT_LOGOUT,
    payload: auth,
  });
};
