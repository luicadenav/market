import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Grid2,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { FormikHelpers, useFormik } from "formik";
import { useAppSelector } from "../../redux/hooks";
import { authThunk } from "../../redux/thunks/auth.thunk";
import { AppDispatch } from "../../redux/store";
import React from "react";

type LoginType = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { getSuccess, getError } = useNotification();
  const dispatch: AppDispatch = useDispatch();

  const { isAuth, error, success } = useAppSelector(
    (state) => state.authReducer
  );

  const handleError = React.useCallback(
    (error: string | null) => {
      if (error) {
        getError(error);
      }
    },
    [error]
  );

  const handleSuccess = React.useCallback(() => {
    if (success) {
      getSuccess("Welcome to Morty's Store");
    }
  }, [success]);

  React.useEffect(() => {
    handleError(error);
  }, [error, handleError]);

  React.useEffect(() => {
    handleSuccess();
  }, [success, handleSuccess]);

  const formik = useFormik<LoginType>({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: LoginValidate,
    onSubmit: async (
      values: LoginType,
      { setSubmitting }: FormikHelpers<LoginType>
    ) => {
      setSubmitting(true);
      await dispatch(authThunk(values));
      setSubmitting(false);
    },
  });

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container maxWidth="sm">
      <Grid2
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "90vh" }}
      >
        <Grid2>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar sesión
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextField
                name="username"
                fullWidth
                sx={{ mt: 2, mb: 1.5 }}
                type="text"
                label="Email"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                name="password"
                fullWidth
                type="password"
                label="Password"
                onChange={formik.handleChange}
                sx={{ mt: 1.5, mb: 1.5 }}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 3 }}
                disabled={formik.isSubmitting}
              >
                Login
              </Button>
            </Box>
            <Typography sx={{ mt: 1, mb: 1 }} variant="body2">
              ask for the credentials
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default LoginPage;
