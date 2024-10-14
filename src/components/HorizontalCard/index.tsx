import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useAppDispatch } from "../../redux/hooks";
import { removeToCart } from "../../redux/slices/cart.slice";

interface CardHorizntalComponentProps {
  id: string | number;
  image: string;
  name: string;
  info: string;
}

export const HorizontalCardComponent: React.FC<CardHorizntalComponentProps> = ({
  id,
  image,
  name,
  info,
}) => {
  const dispatch = useAppDispatch();

  const handleRemoveToCart = () => {
    dispatch(removeToCart({ id }));
  };

  return (
    <Card sx={{ display: "flex", my: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Rick and Morty"
      />
      <Grid2 container sx={{ mx: 1 }}>
        <Grid2 size={{ xs: 9 }}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Divider />
            <Typography variant="h6">{info}</Typography>
          </CardContent>
        </Grid2>
        <Grid2 size={{ xs: 2 }}>
          <CardActions>
            <IconButton onClick={handleRemoveToCart}>
              <CloseRoundedIcon />
            </IconButton>
          </CardActions>
        </Grid2>
      </Grid2>
    </Card>
  );
};
