import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { ICategoriesState } from "../../types/types";

import { addCategory, deleteCategory, editCategory } from "./operations";
import { refreshUser } from "../auth/operations";

const initialState: ICategoriesState = {
  categories: [],
  isLoading: false,
  error: "",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.categories = payload.categories;
      })
      .addCase(addCategory.fulfilled, (state, { payload }) => {
        state.categories.push(payload);
      })
      .addCase(editCategory.fulfilled, (state, { payload }) => {
        const index = state.categories.findIndex(
          (item) => item.id === payload.id
        );
        state.categories[index].name = payload.name;
      })
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        const newArr = state.categories.filter(
          (item) => item.id !== payload.id
        );
        state.categories = newArr;
      })
      .addMatcher(
        isAnyOf(
          refreshUser.pending,
          addCategory.pending,
          editCategory.pending,
          deleteCategory.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = "";
        }
      )
      .addMatcher(
        isAnyOf(
          refreshUser.fulfilled,
          addCategory.fulfilled,
          editCategory.fulfilled,
          deleteCategory.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          refreshUser.rejected,
          addCategory.rejected,
          editCategory.rejected,
          deleteCategory.rejected
        ),
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});
