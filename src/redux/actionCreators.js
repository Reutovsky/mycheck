import * as actionTypes from "./actionTypes";
import {
  apiRegisterByEmail,
  apiLoginVk,
  apiGetCurrentUser,
  apiDeleteCurrentAccount,
  apiLoginByEmail,
  apiActivateAccount,
  apiLogout,
} from "./api";

export const loginByEmail = (emailAndPassword) => async (dispatch) => {
  try {
    const response = await apiLoginByEmail(emailAndPassword);
    const { data } = response;
    const { status } = data;

    dispatch({ type: actionTypes.LOGIN_BY_EMAIL, payload: { data, status } });
  } catch (err) {
    console.error(err);
  }
};

export const registerByEmail = (formValues) => async (dispatch) => {
  try {
    const response = await apiRegisterByEmail(formValues);
    const { data } = response;
    dispatch({
      type: actionTypes.REGISTER_BY_EMAIL,
      payload: { data },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getVkRedirectLocation = () => async (dispatch) => {
  try {
    const response = await apiLoginVk();
    const redirectVkLocation = response?.data?.data?.location ?? null;
    dispatch({
      type: actionTypes.GET_VK_LOCATION,
      payload: { location: redirectVkLocation },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getCurrentUser = () => async (dispatch) => {
  try {
    const response = await apiGetCurrentUser();
    const { user = {} } = response?.data?.data;
    const { status = null } = response?.data;
    dispatch({ type: actionTypes.GET_CURRENT_USER, payload: { user, status } });
  } catch (err) {
    console.error(err);
  }
};

export const deleteCurrentAccount = () => async (dispatch) => {
  try {
    await apiDeleteCurrentAccount();
    dispatch({ type: actionTypes.DELETE_CURRENT_USER });
  } catch (err) {
    console.error(err);
  }
};

export const setActivateAccount = (path) => async (dispatch) => {
  try {
    const response = await apiActivateAccount(path);
    const { data } = response;
    dispatch({ type: actionTypes.ACTIVATE_ACCOUNT, payload: { data } });
  } catch (err) {
    console.error(err);
  }
};

export const resetUser = () => (dispatch) => {
  dispatch({ type: actionTypes.RESET_USER });
};

export const logout = () => async dispatch => {
  try {
    await apiLogout();
    dispatch({ type: actionTypes.LOGOUT });
  } catch (err) {
    console.error(err);
  }
}
