import * as types from "../actionTypes";

const initialState = {
  user: {},
  status: null,
  vkLocation: null,
  activateAccount: null,
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_BY_EMAIL:
      return {
        ...state,
        user: { ...action.payload.data },
      };
    case types.GET_VK_LOCATION:
      return {
        ...state,
        vkLocation: action.payload.location,
      };
    case types.GET_CURRENT_USER:
      return {
        ...state,
        user: { ...action.payload.user },
        status: action.payload.status,
      };
    case types.DELETE_CURRENT_USER:
      return {
        ...state,
        user: {},
        status: null,
      };
    case types.LOGIN_BY_EMAIL:
      return {
        ...state,
        user: { ...action.payload.data },
        status: action.payload.status,
      };
    case types.RESET_USER:
      return {
        ...state,
        user: {},
        status: null,
      };
    case types.ACTIVATE_ACCOUNT:
      return {
        ...state,
        activateAccount: { ...action.payload.data },
      };
    case types.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authorization;
