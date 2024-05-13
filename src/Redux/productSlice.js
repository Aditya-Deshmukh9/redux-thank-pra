import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    lists: [],
    error: "",
  },
  reducers: {
    fetchitems(state) {
      state.loading = false;
    },
    fetchProducts(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong";
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.lists = action.payload;
      state.error = "";
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;

export const fetchProductsData = () => {
  fetch("https://dummyjson.com/products");
};
