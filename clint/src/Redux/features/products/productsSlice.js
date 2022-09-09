import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProductsApi } from "./productsApi";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  error: "",
};

const getallProducts = createAsyncThunk("products/getAllProducts", async () => {
  const products = await getAllProductsApi();
  return products;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getallProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getallProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(getallProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export { productsSlice, getallProducts };
