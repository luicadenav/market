import {
  Box,
  Button,
  Container,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const LoginPage: React.FC<{}> = () => {
  type LoginType = {
    username: string;
    password: string;
  };
  const [loginData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });
  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
  };
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
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="username"
                fullWidth
                type="text"
                label="Email"
                onChange={dataLogin}
                sx={{ mt: 2, mb: 1.5 }}
                required
              />
              <TextField
                name="password"
                fullWidth
                type="password"
                label="Password"
                onChange={dataLogin}
                sx={{ mt: 1.5, mb: 1.5 }}
                required
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 3 }}
              >
                Iniciar sesion
              </Button>
            </Box>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default LoginPage;
