import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import { ICategory } from "../types/types";
import { useAppDispatch } from "../hooks/hooks";
import { deleteCategory } from "../redux/categories/operations";

const DeleteCategoryBtn: React.FC<ICategory> = (item) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const handleDelete = () => {
    console.log("item.id:", item.id);
    console.log(typeof item.id);
        dispatch(deleteCategory(item.id));
    }

  return (
    <>
      <Button
        sx={{ display: "flex", justifyContent: "start" }}
        onClick={handleOpen}
      >
        Delete
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            p: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography>Do you want delete this category ?</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button variant="contained" onClick={handleClose}>
                no
              </Button>
              <Button variant="contained" onClick={handleDelete}>
                yes
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default DeleteCategoryBtn;
