import { Card, CardContent } from "@mui/material";
import DeleteCategoryBtn from "../../components/DeleteCategoryBtn";
import { ICategory } from "../../types/types";
import EditCategoryBtn from "./EditCategoryBtn";

const CategoryActions: React.FC<ICategory> = (item) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EditCategoryBtn {...item} />
        <DeleteCategoryBtn {...item} />
      </CardContent>
    </Card>
  );
};

export default CategoryActions;
