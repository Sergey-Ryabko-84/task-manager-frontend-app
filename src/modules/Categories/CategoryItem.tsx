import { useEffect } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ICategory } from "../../types/types";
import CategoryActionsBtn from "../../components/CategoryActionsBtn";
import { Link } from "./NavLink.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getTasks } from "../../redux/tasks/operations";
import { selectTasks } from "../../redux/tasks/selectors";

const CategoryItem: React.FC<ICategory> = (item) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks)

  useEffect(() => {
    dispatch(getTasks(item.id));
  }, [dispatch, item]);

  const ownTasks = tasks.filter(task => task.categoryId === item.id)

  return (
    <Grid item xs={12}>
      <Card sx={{ bgcolor: "#b3e5fc", px: 2 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "12vw",
            flexWrap: "wrap",
            pt: "24px",
          }}
        >
          <Typography sx={{ flexGrow: 1 }}>{item.name}</Typography>
          <Typography>{`${ownTasks.length} tasks`}</Typography>
          <Typography>
            {item.createdAt.slice(0, 10).split("-").reverse().join(".")}
          </Typography>
          <CategoryActionsBtn {...item} />
          <Link to={item.id.toString()}>more</Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CategoryItem;
