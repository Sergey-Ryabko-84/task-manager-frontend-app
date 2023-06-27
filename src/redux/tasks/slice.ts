import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { ITask, ITasksState } from "../../types/types";

import { addTask, deleteTask, editTask, getTasks } from "./operations";


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
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        payload.forEach((item: ITask) => {
          !state.tasks.some((task) => task.id === item.id) &&
            state.tasks.push(item);
        });
      })
      .addMatcher(
        isAnyOf(
          getTasks.pending,
          addTask.pending,
          editTask.pending,
          deleteTask.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = "";
        }
      )
      .addMatcher(
        isAnyOf(
          getTasks.fulfilled,
          addTask.fulfilled,
          editTask.fulfilled,
          deleteTask.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getTasks.rejected,
          addTask.rejected,
          editTask.rejected,
          deleteTask.rejected
        ),
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});
