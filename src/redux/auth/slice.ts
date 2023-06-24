import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../types/types";

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
  reducers: {},
  extraReducers: (builder) => builder,
});
