import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./auth/slice";
import { categoriesSlice } from "./categories/slice";
import { tasksSlice } from "./tasks/slice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authSlice.reducer),
  categories: categoriesSlice.reducer,
  tasks: tasksSlice.reducer,
});

export default rootReducer;
