import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardProduct = ({ itemsData }) => {
  return (
    <Card sx={{ fontFamily: "Yantramanav, sans-serif" }}>
      <CardMedia
        sx={{ fontFamily: "Yantramanav, sans-serif" }}
        component="img"
        alt={itemsData.producto}
        image={itemsData.img}
      />
      <CardContent sx={{ fontFamily: "Yantramanav, sans-serif" }}>
        <Typography
          sx={{
            fontFamily: "Yantramanav, sans-serif",
            textTransform: "uppercase",
          }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {itemsData.producto}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Yantramanav, sans-serif",
            fontWeight: 400,
            fontSize: 15,
          }}
        >
          {itemsData.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            fontFamily: "Yantramanav, sans-serif",
            color: "rgb(22, 38, 26)",
          }}
          size="small"
        >
          DETALLE
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;