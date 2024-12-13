import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().email().required("El username es requerido"),
  password: yup
    .string()
    .trim()
    .required("El password es requerido")
    .min(4, "el mínimo son son 4 caracteres")
    .max(20, "el máximo son son 4 caracteres"),
});

export const RegisterValidate = yup.object().shape({
  username: yup.string().trim().email().required("El username es requerido"),
  password: yup
    .string()
    .trim()
    .required("El password es requerido")
    .min(4, "el mínimo son son 4 caracteres")
    .max(20, "el máximo son son 4 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});
