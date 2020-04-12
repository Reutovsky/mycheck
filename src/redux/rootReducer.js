import { combineReducers } from 'redux';
import auth from './reducers/auth';
import accountStatus from './reducers/accountStatus';

const reducers = combineReducers({
  auth,
  accountStatus,
});

export default reducers;
