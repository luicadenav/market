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

import { CardComponent, HeaderComponent } from "../../components";
import React from "react";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage = () => {
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
        title="Morty's Store"
        description="Made by Cadena crea"
        element={
          <Button fullWidth variant="contained">
            Call to action
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
                    <Grid2 key={character.id} size={{ xs: 3 }}>
                      <CardComponent
                        name={character.name}
                        image={character.image}
                        species={character.species}
                        status={character.status}
                        id={character.id}
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
