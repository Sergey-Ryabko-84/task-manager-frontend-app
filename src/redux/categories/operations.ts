import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/categories";

export const addCategory = createAsyncThunk(
  "add/categories",
  async (data: api.IAdd, { rejectWithValue }) => {
    try {
      const result = await api.addCategory(data);
      return result;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const editCategory = createAsyncThunk(
  "edit/categories",
  async (data: api.IEdit, { rejectWithValue }) => {
    try {
      const result = await api.editCategory(data);
      return result;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "delete/categories",
  async (data: number, { rejectWithValue }) => {
    try {
      const result = await api.deleteCategory(data);
      return result;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

