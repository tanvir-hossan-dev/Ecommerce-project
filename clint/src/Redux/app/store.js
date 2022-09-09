import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../features/products/productsSlice";
import { userSlice } from "../features/User/userSlice";

const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default Store;
