import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/tasks";
import { addCategoryById } from "../../api/categories";

export const addTask = createAsyncThunk(
  "add/task",
  async (data: api.IAdd, { rejectWithValue }) => {
    try {
      const result = await api.addTask(data);
      return result;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const editTask = createAsyncThunk(
  "edit/task",
  async (data: api.IEdit, { rejectWithValue }) => {
    try {
      const result = await api.editTasky(data);
      return result;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "delete/task",
  async (data: number, { rejectWithValue }) => {
    try {
      const result = await api.deleteTask(data);
      return result;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTasks = createAsyncThunk(
  "get/tasks",
  async (data: number, { rejectWithValue }) => {
    try {
      const result = await addCategoryById(data);
      return result.tasks;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);