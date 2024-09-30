import {
  AppBar,
  Box,
  Button,
  Container,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid>
                <Typography>Cadena Crea</Typography>
              </Grid>
              <Grid>
                <Stack spacing={2} direction="row">
                  <Button variant="contained">login</Button>
                  <Button variant="outlined">login</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
