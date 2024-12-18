import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().email().required("Email is required"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(4, "The password must be at least 4 characters long.")
    .max(20, "The password must be no more than 4 characters long"),
});

export const RegisterValidate = yup.object().shape({
  username: yup.string().trim().email().required("Email is required"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(4, "The password must be at least 4 characters long.")
    .max(20, "The password must be no more than 4 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .trim()
    .required("Password is required"),
});
