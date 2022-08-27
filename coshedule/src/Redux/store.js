import { reducer as logger } from "./AppReducer/reducer";
import { legacy_createStore, combineReducers,applyMiddleware, compose } from "redux";
import { reducer as App_reducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  logger,App_reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
composeEnhancers(  applyMiddleware(thunk))
);
