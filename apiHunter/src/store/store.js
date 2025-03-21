import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { apiReducer } from "./reducers/apiReducer";

const store = configureStore({
  reducer: {
    apis: apiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
