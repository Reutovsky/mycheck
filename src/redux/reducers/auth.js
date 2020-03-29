import * as actionTypes from "../actionTypes";

const initialState = {
  isAuthorized: false,
  firstName: null,
  lastName: null,
  roles: [],
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTHED:
      return {
        ...state,
        isAuthorized: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        roles: action.payload.roles,
      };
    default:
      return state;
  }
};

export default auth;
