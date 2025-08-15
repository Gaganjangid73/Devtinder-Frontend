import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; 
import Feedreducer from "../Utils/feedslice";
const AppStore = configureStore({
  reducer: {
    user: userReducer,
    feed : Feedreducer,
  },

});

if (process.env.NODE_ENV === "development") {
  window.store = AppStore;
}

export default AppStore;
