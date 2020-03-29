import { SET_AUTHED } from "./actionTypes";

export const setAuthed = () => (dispatch) => {
  dispatch({ type: SET_AUTHED, payload: {} });
};
