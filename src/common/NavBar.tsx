import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  Grid2,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { CartComponent } from "./Cart";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/auth.slice";

const NavBar = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useAppSelector((state) => state.cartReducer);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };

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
                {isAuth ? (
                  <Button
                    variant="contained"
                    onClick={() => dispatch(logout())}
                  >
                    logout
                  </Button>
                ) : (
                  <Stack spacing={2} direction="row">
                    <IconButton
                      color="primary"
                      onClick={() => handleStateViewDrawer()}
                    >
                      <Badge color="error" badgeContent={items.length}>
                        <ShoppingCartOutlinedIcon />
                      </Badge>
                    </IconButton>
                    <Button
                      variant="contained"
                      onClick={() => navigate("login")}
                    >
                      login
                    </Button>
                    <Button variant="outlined" onClick={() => {}}>
                      register
                    </Button>
                  </Stack>
                )}
              </Grid2>
            </Grid2>
          </Container>
        </Toolbar>
      </AppBar>
      <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
    </Box>
  );
};

export default NavBar;
