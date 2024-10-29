import { Box, Divider, Grid2, Typography } from "@mui/material";
import React from "react";

type HeaderProps = {
  title: string;
  description: string;
  element?: React.ReactNode | null;
};

export const HeaderComponent = ({
  title,
  description,
  element,
}: HeaderProps) => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "350px" }}>
        <Grid2
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid2
            size={{ xs: 5, md: 8 }}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Grid2>
              <Typography variant="h1" sx={{ my: 2 }}>
                {title}
              </Typography>
            </Grid2>
            <Grid2>
              <Typography>{description}</Typography>
            </Grid2>
            {element != undefined && (
              <Grid2 width="100%" sx={{ mt: 4 }}>
                {element}
              </Grid2>
            )}
          </Grid2>
        </Grid2>
      </Box>
      <Divider />
    </div>
  );
};
