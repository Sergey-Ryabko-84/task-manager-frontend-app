import { Button, Card, CardContent } from "@mui/material";
import DeleteCategoryBtn from "../../components/DeleteCategoryBtn";
import { ICategory } from "../../types/types";

const CategoryActions: React.FC<ICategory> = (item) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button sx={{ display: "flex", justifyContent: "start" }}>Edit</Button>
        <DeleteCategoryBtn {...item} />
      </CardContent>
    </Card>
  );
};

export default CategoryActions;
