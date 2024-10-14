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
import { useNavigate } from "react-router-dom";
import { addToCard } from "../../redux/slices/cart.slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";

type cardsProps = {
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
};

export const CardComponent = ({
  image,
  name,
  status,
  species,
  id,
}: cardsProps) => {
  const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemExist = useAppSelector((state) => state.cartReducer);

  React.useEffect(() => {
    setDisabledBtn(itemExist.some((item) => item.id === id));
  }, [itemExist, id]);

  let handleAddToCar = () => {
    dispatch(
      addToCard({
        id,
        name,
        image,
        info: status,
      })
    );
  };
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
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`character/${id}`)}
        >
          Learn more
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          onClick={handleAddToCar}
          disabled={disabledBtn}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
