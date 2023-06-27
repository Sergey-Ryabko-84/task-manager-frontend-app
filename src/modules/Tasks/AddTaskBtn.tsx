import { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, Modal, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addTask } from "../../redux/tasks/operations";
import { selectIsLoading } from "../../redux/categories/selectors";
import { validationSchema } from "./validationSchema";
import fields from "./fields";
import { Form } from "./Form.styled";
import { ICategory } from "../../types/types";

const AddTaskBtn: React.FC<ICategory> = (category) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: { name: "", dateStart: Date.now, dateEnd: Date.now },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      if (values.dateStart > values.dateEnd) {
        return alert("the end date can`t be less than the start date");
      }
      dispatch(
        addTask({
          name: values.name,
          dateStart: values.dateStart.toString(),
          dateEnd: values.dateEnd.toString(),
          categoryId: category.id,
        })
      )
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
        sx={{ width: 200, fontSize: 12 }}
        size="large"
        color="info"
        variant="contained"
        type="button"
        onClick={handleOpen}
      >
        Add task
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
          <TextField
            margin="normal"
            fullWidth
            {...fields.dateStart}
            type="date"
            onChange={formik.handleChange}
            error={formik.touched.dateStart && Boolean(formik.errors.dateStart)}
            helperText={
              formik.touched.dateStart && Boolean(formik.errors.dateStart)
            }
          />
          <TextField
            margin="normal"
            fullWidth
            {...fields.dateEnd}
            type="date"
            onChange={formik.handleChange}
            error={formik.touched.dateEnd && Boolean(formik.errors.dateEnd)}
            helperText={
              formik.touched.dateEnd && Boolean(formik.errors.dateEnd)
            }
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
              startIcon={<Add />}
            >
              Add
            </LoadingButton>
          </Box>
        </Form>
      </Modal>
    </>
  );
};

export default AddTaskBtn;
