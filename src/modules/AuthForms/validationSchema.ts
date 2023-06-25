import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Password should be of minimum 4 characters length")
    .max(16, "Password should be of maximum 16 characters length")
    .required("Password is required"),
});
