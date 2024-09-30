import { Button, Container } from "@mui/material";
import React from "react";

const LoginPage: React.FC<{}> = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 9 }}>
      <Button variant="contained">Hola login</Button>
    </Container>
  );
};

export default LoginPage;
