import { Button, Container } from "@mui/material";
import React from "react";

const HomePage: React.FC<{}> = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 9 }}>
      <Button variant="contained">Hola home</Button>
    </Container>
  );
};

export default HomePage;
