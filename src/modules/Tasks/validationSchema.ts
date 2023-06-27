import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("Email is required"),
  dateStart: yup.date().required("dateStart is required"),
  dateEnd: yup.date().required("dateStart is required"),
});
