import { Container } from "@mui/material";
import AppPanel from "../modules/AppPanel";
import LogOut from "../components/LogOut";
import CategoryList from "../modules/Categories/CategoryList";
import AddCategoryBtn from "../modules/Categories/AddCategoryBtn";

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
