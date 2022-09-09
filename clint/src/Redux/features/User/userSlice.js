import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signOut, signUp } from "./userApi";

const initialState = {
  isLoading: false,
  error: "",
  user: JSON.parse(localStorage.getItem("user")) || {},
};

const LoginUser = createAsyncThunk("user/loginUser", async ({ email, password }) => {
  const userData = await signIn(email, password);
  return userData;
});

const regiserUser = createAsyncThunk("user/registerUser", async ({ name, email, password }) => {
  const regiser = await signUp(name, email, password);
  return regiser;
});

const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  const logout = await signOut();
  return logout;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = {};
      })
      .addCase(regiserUser.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(regiserUser.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })
      .addCase(regiserUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.user = {};
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = action.error.message;
        state.user = {};
      });
  },
});

export { userSlice, LoginUser, regiserUser, logoutUser };
