import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
// import cartReducer from "./productSlice";
// import cartReducer from "s./productSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    // cart: cartReducer,
  },
});

export default store;
