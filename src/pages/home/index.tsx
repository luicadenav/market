import { Button, Container } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { HeaderComponent } from "../../components";

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="bienvenido a cadena crea"
        element={
          <Button fullWidth variant="contained">
            llamado a la acción
          </Button>
        }
      />
    </Container>
  );
};

export default HomePage;
