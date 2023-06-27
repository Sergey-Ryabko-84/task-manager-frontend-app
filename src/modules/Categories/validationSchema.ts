import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup
    .string()
    .required("Email is required"),
});
