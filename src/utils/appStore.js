import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // This reducer is basically our apps big reducer and it consists of small reducers from different slices.
  reducer: {
    //cart slice has cartReducer
    cart: cartReducer,
  },
});

export default appStore;
