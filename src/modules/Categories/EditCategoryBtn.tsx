import { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { editCategory } from "../../redux/categories/operations";
import { selectIsLoading } from "../../redux/categories/selectors";
import { validationSchema } from "./validationSchema";
import fields from "./fields";
import { Form } from "./Form.styled";
import { ICategory } from "../../types/types";

const EditCategoryBtn: React.FC<ICategory> = (item) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: { name: item.name },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(editCategory({ ...values, id: item.id }))
        .unwrap()
        .then(() => {
          formik.resetForm();
          handleClose();
        })
        .catch((error) => null);
    },
  });

  return (
    <>
      <Button
        sx={{ display: "flex", justifyContent: "start" }}
        type="button"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Form onSubmit={formik.handleSubmit}>
          <Typography>{`Edit ${item.name} category`}</Typography>
          <TextField
            margin="normal"
            fullWidth
            {...fields.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              sx={{ my: 2, height: 56 }}
              fullWidth
              variant="contained"
              type="button"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <LoadingButton
              sx={{ my: 2, height: 56 }}
              fullWidth
              variant="contained"
              type="submit"
              loading={isLoading}
              loadingPosition="start"
              startIcon={<Edit />}
            >
              Save
            </LoadingButton>
          </Box>
        </Form>
      </Modal>
    </>
  );
};

export default EditCategoryBtn;
