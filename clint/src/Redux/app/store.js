import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../features/product/productSlice";
import { productsSlice } from "../features/products/productsSlice";
import { userSlice } from "../features/User/userSlice";

const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productsSlice.reducer,
    product: productSlice.reducer,
  },
});

export default Store;
