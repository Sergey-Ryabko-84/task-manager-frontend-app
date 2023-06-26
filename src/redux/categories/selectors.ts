import { RootState } from "../store";

export const selectCategories = (state: RootState) => state.categories.categories;
export const selectIsLoading = (state: RootState) => state.categories.isLoading;
export const selectError = (state: RootState) => state.categories.error;
