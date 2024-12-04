
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducers"; 
import taskReducer from "./reducers/taskReducer"; // Import the taskReducer
import uiReducer from "./reducers/uiReducer"; // Import the uiReducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer, 
  },
});

export default store;
