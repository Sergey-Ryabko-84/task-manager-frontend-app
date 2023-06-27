import React from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addCategory } from "../../redux/categories/operations";
import { selectIsLoading } from "../../redux/categories/selectors";
import { validationSchema } from "./validationSchema";
import fields from "./fields";
import { Form } from "./Form.styled";

const AddCategoryForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addCategory(values));
    },
  });

  return (
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
      <LoadingButton
        sx={{ my: 2, height: 56 }}
        fullWidth
        color="primary"
        variant="contained"
        type="submit"
        loading={isLoading}
        loadingPosition="start"
        startIcon={<Add />}
      >
        Add category
      </LoadingButton>
    </Form>
  );
};

export default AddCategoryForm;
