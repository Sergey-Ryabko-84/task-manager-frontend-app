import { Button, Modal } from "@mui/material";
import { useState } from "react";
import AddCategoryForm from "../modules/Categories/AddCategoryForm";

const AddCategoryBtn: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        sx={{ width: 170, fontSize: 12 }}
        size="large"
        color="info"
        variant="contained"
        type="button"
        onClick={handleOpen}
      >
        Add category
      </Button>
      <Modal open={open} onClose={handleClose}>
        <AddCategoryForm />
      </Modal>
    </>
  );
};

export default AddCategoryBtn;
