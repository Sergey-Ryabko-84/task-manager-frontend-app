import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { IAuthState } from "../../types/types";

import { login, refreshUser, register } from "./operations";

const initialState: IAuthState = {
  user: { id: 0, email: "", roles: [] },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = { id: 0, email: "", roles: [] };
      state.token = "";
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user.id = payload.id;
        state.user.email = payload.email;
        state.user.roles = payload.roles;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.token = "";
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(register.pending, login.pending, refreshUser.pending),
        (state) => {
          state.isLoading = true;
          state.error = "";
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, { payload }) => {
          state.token = payload.token;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, refreshUser.rejected),
        (state, action: PayloadAction<any>) => {
          console.log(action);
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { logout } = authSlice.actions