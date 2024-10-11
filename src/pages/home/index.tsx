import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid2,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { CardComponent, HeaderComponent } from "../../components";
import React from "react";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

const HomePage = () => {
  const [page, setPage] = React.useState(1);
  const [allCharacters, setAllCharacters] = React.useState<
    TypeCharacter[] | null
  >(null);
  const [loading, setLoading] = React.useState(true);
  const [countPages, setCountPages] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  React.useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page: page })
      .then((r) => {
        setCountPages(r.data.info.pages);
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, [page]);

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
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            {allCharacters?.length !== 0 ? (
              <Grid2 sx={{ my: 2 }} container spacing={2} direction="row">
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
              <Typography>No data</Typography>
            )}
          </div>
          <Stack>
            <Pagination
              sx={{ mx: "auto" }}
              count={countPages}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </>
      )}
    </Container>
  );
};

export default HomePage;
