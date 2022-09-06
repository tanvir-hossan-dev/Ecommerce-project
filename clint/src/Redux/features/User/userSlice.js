import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUser from "./userApi";

const initialState = {
  isLoading: false,
  error: "",
  user: {},
};

const fetchUser = createAsyncThunk("user/fetchUser", async ({ email, password }) => {
  const userData = await getUser(email, password);
  return userData;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = {};
      });
  },
});

export { userSlice, fetchUser };
