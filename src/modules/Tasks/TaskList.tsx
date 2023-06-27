import { Grid } from "@mui/material";
import { ITask } from "../../types/types";
import TaskItem from "./TaskItem";

const CategoryList: React.FC<any> = (lState) => {
  const { tasks } = lState;

  return (
    <Grid container spacing={2} sx={{ mt: 8 }}>
      {tasks.map((item: ITask) => (
        <TaskItem key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default CategoryList;
