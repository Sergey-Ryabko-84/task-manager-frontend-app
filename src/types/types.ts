export interface IPropChildren {
  children: React.ReactNode;
}

// Auth
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

// Categories

interface ICategory {
  id: number;
  name: string;
  userId: number;
  createdAt: string;
}

interface ICategoriesArr {
  category: ICategory;
}

export interface ICategories {
  categories: ICategoriesArr[];
  isLoading: boolean;
  error: string;
}