import { useLocation } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppPanel from "../modules/AppPanel";
import LogOut from "../components/LogOut";
import TaskList from "../modules/Tasks/TaskList";

const TasksPage: React.FC = () => {
  const location = useLocation();
  const { category } = location.state;

  return (
    <Container maxWidth="xl">
      <AppPanel>
        <Typography>{category.name}</Typography>
        <LogOut />
      </AppPanel>
      <TaskList {...location.state} />
    </Container>
  );
};

export default TasksPage;
