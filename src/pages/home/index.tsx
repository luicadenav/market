import { Button, Container } from "@mui/material";
import { useNotification } from "../../context/notification.context";

const HomePage = () => {
  const { getError } = useNotification();
  return (
    <Container maxWidth="xl" sx={{ mt: 9 }}>
      <Button variant="contained">Hola home</Button>
    </Container>
  );
};

export default HomePage;
