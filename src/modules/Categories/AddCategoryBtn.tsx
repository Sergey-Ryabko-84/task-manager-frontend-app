import { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, Modal, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addCategory } from "../../redux/categories/operations";
import { selectIsLoading } from "../../redux/categories/selectors";
import { validationSchema } from "./validationSchema";
import fields from "./fields";
import { Form } from "./Form.styled";

const AddCategoryBtn: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addCategory(values))
        .unwrap()
        .then(() => {
          formik.resetForm();
          handleClose()
        })
        .catch((error) => null);
    },
  });

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
        <Form onSubmit={formik.handleSubmit}>
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
            <LoadingButton
              sx={{ my: 2, height: 56 }}
              fullWidth
              variant="contained"
              type="submit"
              loading={isLoading}
              loadingPosition="start"
              startIcon={<Add />}
            >
              Add
            </LoadingButton>
            <Button
              sx={{ my: 2, height: 56 }}
              fullWidth
              variant="contained"
              type="button"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Form>
      </Modal>
    </>
  );
};

export default AddCategoryBtn;
