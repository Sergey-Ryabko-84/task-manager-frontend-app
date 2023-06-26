import React from "react";
import { useFormik } from "formik";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Login, Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectIsLoading } from "../../redux/auth/selectors";
import { login, refreshUser } from "../../redux/auth/operations";
import { validationSchema } from "./validationSchema";
import { initialValues } from "./initialValues";
import fields from "./fields";
import { Form } from "./Form.styled";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(login(values))
        .unwrap()
        .then(()=> dispatch(refreshUser()))
        .catch((error) => null);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        margin="normal"
        fullWidth
        {...fields.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        margin="normal"
        fullWidth
        {...fields.password}
        type={showPassword ? "text" : "password"}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <LoadingButton
        sx={{ my: 2, height: 56 }}
        fullWidth
        color="primary"
        variant="contained"
        type="submit"
        loading={isLoading}
        loadingPosition="start"
        startIcon={<Login />}
      >
        Log in
      </LoadingButton>
    </Form>
  );
};

export default LoginForm;
