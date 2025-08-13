import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./AppStore";


const AppStore = configureStore({

    reducer: {
        user: useReducer,
    },

})

export default AppStore;