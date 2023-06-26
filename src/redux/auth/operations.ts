import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/auth";
import { IAuthState } from "../../types/types";

export const register = createAsyncThunk(
  "auth/register",
    async (data: api.IAuthData, { rejectWithValue }) => {
        console.log("auth/register");
        console.log("data:", data);
    try {
      const result = await api.register(data);
      return result;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: api.IAuthData, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logout = async () => {
  const result = api.logout();
  return result;
};

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: IAuthState };
      const result = await api.getCurrent(auth.token);
      return result;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState() as { auth: IAuthState };
      if (!auth.token) {
        return false;
      }
    },
  }
);
