import { Container } from "@mui/material";
import AppPanel from "../modules/AppPanel";
import LogOut from "../components/LogOut";
import AddCategoryBtn from "../components/AddCategoryBtn";
import CategoryList from "../modules/Categories/CategoryList";

const CategoriesPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <AppPanel>
        <AddCategoryBtn />
        <LogOut />
      </AppPanel>
      <CategoryList/>
    </Container>
  );
};

export default CategoriesPage;
