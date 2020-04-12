import * as types from "../actionTypes";

const initialState = {
  accountStatus: {},
};

const accountStatus = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACCOUNT_STATUS:
    case types.CHANGE_SETTINGS:
      return {
        ...state,
        accountStatus: { ...action.payload.data },
      };
    default:
      return state;
  }
};

export default accountStatus;
