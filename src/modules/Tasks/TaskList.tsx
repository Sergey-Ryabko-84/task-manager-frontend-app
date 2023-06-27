import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectTasks } from "../../redux/tasks/selectors";
import { getTasks } from "../../redux/tasks/operations";
import { ICategory, ITask } from "../../types/types";
import TaskItem from "./TaskItem";

const CategoryList: React.FC<ICategory> = (category) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const [ownTasks, setOwnTasks] = useState<ITask[]>([]);

  useEffect(() => {
    dispatch(getTasks(category.id));
    const tasksArr = tasks.filter((task) => task.categoryId === category.id);
    setOwnTasks(tasksArr);
  }, [dispatch, tasks, category.id]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center", mt: 8 }}
    >
      {ownTasks.length > 0 &&
        ownTasks.map((item: ITask) => <TaskItem key={item.id} {...item} />)}
    </Grid>
  );
};

export default CategoryList;
