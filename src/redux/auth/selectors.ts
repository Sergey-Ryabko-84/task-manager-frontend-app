import { IGlobalStore } from "../../types/types";

export const selectUser = (state: IGlobalStore) => state.auth.user;
export const selectIsLoggedIn = (state: IGlobalStore) => state.auth.isLoggedIn;
export const selectAuth = (state: IGlobalStore) => {
  const { isLoggedIn, token } = state.auth;
  return { isLoggedIn, token };
};
export const selectIsLoading = (state: IGlobalStore) => state.auth.isLoading;
export const selectError = (state: IGlobalStore) => state.auth.error;
