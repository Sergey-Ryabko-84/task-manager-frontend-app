import { Container } from "@mui/material";
import AppPanel from "../modules/AppPanel";
import LogOut from "../components/LogOut";
import AddCategoryBtn from "../components/AddCategoryBtn";

const CategoriesPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <AppPanel>
        <AddCategoryBtn />
        <LogOut />
      </AppPanel>
    </Container>
  );
};

export default CategoriesPage;
