import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store=legacy_createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store;