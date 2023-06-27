import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { ITasksState } from "../../types/types";

import {} from "./operations";


const initialState: ITasksState = {
  tasks: [],
  isLoading: false,
  error: "",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder

});
