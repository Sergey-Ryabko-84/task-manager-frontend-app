import { instance } from "./auth";

export interface IAdd {
  name: string;
}

export interface IEdit {
  name: string;
  id: number;
}

export const addCategory = async (data: IAdd) => {
  const { data: result } = await instance.post("/categories", data);
  return result;
};

export const editCategory = async (data: IEdit) => {
  const { data: result } = await instance.patch("/categories", data);
  return result;
};

export const deleteCategory = async (data: number) => {
  const { data: result } = await instance.delete(`/categories/${data}`);
  return result;
};