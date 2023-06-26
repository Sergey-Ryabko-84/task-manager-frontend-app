import { Button } from "@mui/material";
import { useState } from "react";

const AddCategoryBtn: React.FC = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <Button
      sx={{ width: 160, fontSize: 12 }}
      size="large"
      color="info"
      variant="contained"
      type="button"
      onClick={() => setIsModalOn((state) => !state)}
    >
      Add category
    </Button>
  );
};

export default AddCategoryBtn;
