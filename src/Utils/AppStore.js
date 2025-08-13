import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; 
const AppStore = configureStore({
  reducer: {
    user: userReducer,
  },

});

if (process.env.NODE_ENV === "development") {
  window.store = AppStore;
}

export default AppStore;
