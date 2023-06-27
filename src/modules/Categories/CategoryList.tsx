import { Grid } from "@mui/material";
import { useAppSelector } from "../../hooks/hooks";
import { selectCategories } from "../../redux/categories/selectors";
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC = () => {
  const categories = useAppSelector(selectCategories);

  return (
    <Grid container spacing={2} sx={{ mt: 8 }}>
      {categories.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default CategoryList;
