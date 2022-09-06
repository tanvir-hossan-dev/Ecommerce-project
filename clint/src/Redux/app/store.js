import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/User/userSlice";

const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default Store;
