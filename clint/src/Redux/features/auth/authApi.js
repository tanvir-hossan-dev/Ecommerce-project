import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const authAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(userLoggedIn(data));
        } catch (err) {}
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("auth", JSON.stringify(data));
          dispatch(userLoggedIn(data));
        } catch (err) {}
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authAPi;
