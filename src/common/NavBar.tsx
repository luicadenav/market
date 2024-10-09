import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  Grid2,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid2
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid2>
                <Typography>Cadena Crea</Typography>
              </Grid2>
              <Grid2>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={() => navigate("login")}>
                    login
                  </Button>
                  <Button variant="outlined">login</Button>
                </Stack>
              </Grid2>
            </Grid2>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
