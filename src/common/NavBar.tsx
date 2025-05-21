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
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { CartComponent } from "./Cart";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/auth.slice";
import Cookies from "js-cookie";
import luLogo from "../assets/images/logo.svg";

const NavBar = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const items = useAppSelector((state) => state.cartReducer);
  const [open, setOpen] = React.useState<boolean>(false);

  const isHome = location.pathname === "/";

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("accessToken");
    navigate("/login");
  };

  const handleClick = () => {
    navigate(isHome ? "/profile" : "/");
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
                <Box
                  component="img"
                  src={luLogo}
                  alt="luisa logo"
                  sx={{
                    width: {
                      xs: "40px",
                      sm: "50px",
                    },
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </Grid2>
              <Grid2>
                {isAuth ? (
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
                      sx={{
                        minWidth: "100px", // o cualquier valor que necesites
                      }}
                      variant="contained"
                      onClick={handleClick}
                    >
                      {isHome ? "profile" : "Home"}
                    </Button>
                    <Button variant="contained" onClick={handleLogout}>
                      logout
                    </Button>
                  </Stack>
                ) : (
                  <Stack spacing={2} direction="row">
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
