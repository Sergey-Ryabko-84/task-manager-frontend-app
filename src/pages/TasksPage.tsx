import { Container } from "@mui/material";
import AppPanel from "../modules/AppPanel";
import LogOut from "../components/LogOut";

const TasksPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <AppPanel>
        <LogOut />
      </AppPanel>
    </Container>
  );
};

export default TasksPage;
