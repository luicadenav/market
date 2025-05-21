import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";

import profileImg from "../../assets/images/profile.jpeg";
import { useAppSelector } from "../../redux/hooks";

const ProfilePage = () => {
  const [loading, setloading] = useState(false);
  const { userData } = useAppSelector((state) => state.authReducer);
  return (
    <Container maxWidth="xl">
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid2 sx={{ mt: 2 }} container columnSpacing={2}>
          <Grid2 size={{ xs: 6 }}>
            <Typography variant="h1">Profile</Typography>
            <Divider />
            <Typography variant="h6">{`User Email: ${userData?.email}`}</Typography>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <img
              src={profileImg}
              alt="profile"
              style={{ width: "100%", borderRadius: "0.5em" }}
            />
          </Grid2>
        </Grid2>
      )}
    </Container>
  );
};

export default ProfilePage;
