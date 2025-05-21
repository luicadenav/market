import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Grid2,
  Link,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link as RouterLink, Navigate } from "react-router-dom";
import { useNotification } from "../../context/notification.context";
import { RegisterValidate } from "../../utils/validateForm";
import { FormikHelpers, useFormik } from "formik";
import { useAppSelector } from "../../redux/hooks";
import { AppDispatch } from "../../redux/store";
import React from "react";
import { registerThunk } from "../../redux/thunks/register.thunk";
import background from "../../assets/images/background.webp";

type RegisterType = {
  username: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const { getSuccess, getError } = useNotification();
  const dispatch: AppDispatch = useDispatch();

  const { isAuth, error, success } = useAppSelector(
    (state) => state.authReducer
  );

  const handleError = React.useCallback(
    (error: string | null) => {
      console.log("error in  register", error);

      if (error) {
        getError(error);
      }
    },
    [error]
  );

  const handleSuccess = React.useCallback(() => {
    if (success) {
      getSuccess("Successful registration");
    }
  }, [success]);

  React.useEffect(() => {
    handleError(error);
  }, [error, handleError]);

  React.useEffect(() => {
    handleSuccess();
  }, [success, handleSuccess]);

  const formik = useFormik<RegisterType>({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: RegisterValidate,
    onSubmit: async (
      values: RegisterType,
      { setSubmitting }: FormikHelpers<RegisterType>
    ) => {
      setSubmitting(true);
      await dispatch(registerThunk(values));
      setSubmitting(false);
    },
  });

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Grid2
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "90vh" }}
      >
        <Grid2 size={{ xs: 12 }} sx={{ maxWidth: "600px" }}>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Register
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

              <TextField
                name="confirmPassword"
                fullWidth
                type="password"
                label="Confirm Password"
                onChange={formik.handleChange}
                sx={{ mt: 1.5, mb: 1.5 }}
                value={formik.values.confirmPassword}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 3 }}
                disabled={formik.isSubmitting}
              >
                Sign up
              </Button>
            </Box>
            <Typography sx={{ mt: 1, mb: 1 }} variant="body2">
              Have an account?{" "}
              <Link
                component={RouterLink}
                to="/login"
                underline="none"
                color="primary"
              >
                Login
              </Link>
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default RegisterPage;
