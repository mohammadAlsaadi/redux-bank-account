// import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlicce";
import customerReducer from "./features/customers/customerSlice";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
