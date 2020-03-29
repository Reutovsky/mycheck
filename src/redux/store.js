import {createStore, applyMiddleware} from "redux";

import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import reducers from "./rootReducer";

const middleware = [thunk];

const preloadedState = {};

const composeEnhacers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}

const store =
  process.env.NODE_ENV !== "production"
    ? createStore(reducers, preloadedState, composeEnhacers(applyMiddleware(...middleware)))
    : createStore(reducers, applyMiddleware(...middleware));

export default store;
