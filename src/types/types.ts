export interface IUser {
  id: number;
  email: string;
  roles: string[];
}

export interface IAuthState {
  user: IUser;
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
}

export interface IGlobalStore {
  auth: IAuthState;
}