import { useState } from "react";
import { useFormik } from "formik";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { editTask } from "../../redux/tasks/operations";
import { selectIsLoading } from "../../redux/categories/selectors";
import { validationSchema } from "./validationSchema";
import fields from "./fields";
import { Form } from "./Form.styled";
import { ITask } from "../../types/types";

const EditTaskBtn: React.FC<ITask> = (item) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      name: item.name,
      dateStart: item.dateStart,
      dateEnd: item.dateEnd,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.dateStart > values.dateEnd) {
        return alert("the end date can`t be less than the start date");
      }
      dispatch(
        editTask({
          id: item.id,
          name: values.name,
          dateStart: values.dateStart.toString(),
          dateEnd: values.dateEnd.toString(),
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
        fullWidth
        variant="contained"
        type="button"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Form onSubmit={formik.handleSubmit}>
          <Typography>Edit task</Typography>
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

export default EditTaskBtn;
