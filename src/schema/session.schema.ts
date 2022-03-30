import { object, string } from "yup";
export const createSessionSchema = object({
  body: object({
    email: string().required("Email Is Required"),
    password: string().required("Password Is Requred"),
  }),
});
