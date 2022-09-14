import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import { productSlice } from "../features/product/productSlice";
import { productsSlice } from "../features/products/productsSlice";

const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    products: productsSlice.reducer,
    product: productSlice.reducer,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(apiSlice.middleware),
});

export default Store;
