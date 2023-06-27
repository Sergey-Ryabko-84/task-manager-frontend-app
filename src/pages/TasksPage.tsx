import { NavLink, useLocation } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppPanel from "../modules/AppPanel";
import LogOut from "../components/LogOut";
import TaskList from "../modules/Tasks/TaskList";
import AddTaskBtn from "../modules/Tasks/AddTaskBtn";
import { ArrowBack } from "@mui/icons-material";

const TasksPage: React.FC = () => {
  const location = useLocation();
  const { category } = location.state;

  return (
    <Container maxWidth="xl">
      <AppPanel>
        <NavLink to="/categories"><ArrowBack sx={{mr: 3}}/></NavLink>
        <AddTaskBtn {...category} />
        <Typography
          sx={{ display: "inline-block", width: "85%", textAlign: "end" }}
        >
          {category.name}
        </Typography>
        <LogOut />
      </AppPanel>
      <TaskList {...category} />
    </Container>
  );
};

export default TasksPage;
