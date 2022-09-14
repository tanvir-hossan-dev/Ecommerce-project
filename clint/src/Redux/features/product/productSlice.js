import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "./productApi";

const initialState = {
  isLoading: false,
  isError: false,
  product: {},
  error: "",
};

const getSingleProduct = createAsyncThunk("product/getSingleProducct", async ({ id }) => {
  const product = await productApi(id);
  return product;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.product = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export { productSlice, getSingleProduct };
