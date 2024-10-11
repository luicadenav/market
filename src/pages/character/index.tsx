import { useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import React, { useState } from "react";
import { ICharacter } from "./interface/character.interface";
import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";

const CharacterPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);
  const [character, setCharacter] = React.useState<ICharacter | null>(null);

  React.useEffect(() => {
    setLoading(true);
    characters
      .getById({ id })
      .then((r) => {
        setCharacter(r.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box>
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid2 sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid2 size={{ xs: 6 }}>
              <Typography variant="h1">{character?.name}</Typography>
              <Divider />
              <Typography variant="h6">{character?.origin.name}</Typography>
              <Box sx={{ mt: 2 }}>
                <Chip
                  color="primary"
                  variant="outlined"
                  label={character?.status}
                />
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <img
                src={character?.image}
                style={{ width: "100%", borderRadius: "0.5em" }}
              />
            </Grid2>
          </Grid2>
        )}
      </Container>
    </Box>
  );
};

export default CharacterPage;
