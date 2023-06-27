import { instance } from "./auth";

export interface IAdd {
  name: string;
  dateStart: string;
  dateEnd: string;
  categoryId: number;
}

export interface IEdit {
  id: number;
  name: string;
  dateStart: string;
  dateEnd: string;
}

export const addTask = async (data: IAdd) => {
  const { data: result } = await instance.post("/tasks", data);
  return result;
};

export const editTasky = async (data: IEdit) => {
  const { data: result } = await instance.patch("/tasks", data);
  return result;
};

export const deleteTask = async (data: number) => {
  const { data: result } = await instance.delete(`/tasks/${data}`);
  return result;
};