import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

type cardsProps = {
  image: string;
  name: string;
  status: string;
  species: string;
};

export const CardComponent = ({ image, name, status, species }: cardsProps) => {
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt="" />
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>specie : {species} </Typography>
        <Typography sx={{ mt: 1.5 }}>status : {status} </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" size="small">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};
