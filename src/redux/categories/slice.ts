import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { ICategories } from "../../types/types";

import {} from "./operations";
import { refreshUser } from "../auth/operations";

const initialState: ICategories = {
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
      .addMatcher(isAnyOf(refreshUser.pending), (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addMatcher(isAnyOf(refreshUser.fulfilled), (state) => {
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(refreshUser.rejected),
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});
