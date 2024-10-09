import { Box, Button, Container, Grid2 } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { CardComponent, HeaderComponent } from "../../components";
import React from "react";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./character.interface";

const HomePage = () => {
  const [allCharacters, setAllCharacters] = React.useState<
    TypeCharacter[] | null
  >(null);
  React.useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllCharacters(r.data.results);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

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
      {allCharacters?.length !== 0 ? (
        <Grid2 container spacing={2} direction="row">
          {allCharacters?.map((character) => {
            return (
              <Grid2 size={{ xs: 3 }}>
                <CardComponent
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  species={character.species}
                  status={character.status}
                />
              </Grid2>
            );
          })}
        </Grid2>
      ) : (
        ""
      )}
    </Container>
  );
};

export default HomePage;
