import axios from "axios";

export interface IAuthData {
  email: string;
  password: string;
}

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const setToken = (token: string) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const register = async (data: IAuthData) => {
  const { data: result } = await instance.post("/auth/registration", data);
  setToken(result.token);
  return result;
};

export const login = async (data: IAuthData) => {
  const { data: result } = await instance.post("/auth/login", data);
  setToken(result.token);
  return result;
};

export const logout = () => {
  setToken("");
  return { massage: "Successful logout" };
};

export const getCurrent = async (token: string) => {
  try {
    setToken(token);
    const { data } = await instance.get("/auth/current");
    return data;
  } catch (error) {
    setToken("");
    throw error;
  }
};
