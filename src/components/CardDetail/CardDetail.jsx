import "./CardDetail.css";

// MUI
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import ProductCount from "../ProductCount/ProductCount";

const CardDetail = ({ itemData }) => {
  return (
    <div className="container-card-detail">
      <Card sx={{ maxWidth: 400, fontFamily: "Yantramanav, sans-serif" }}>
        <CardMedia
          component="img"
          alt={itemData.producto}
          image={itemData.img}
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
            {itemData.producto}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Yantramanav, sans-serif",
              fontWeight: 400,
              fontSize: 15,
            }}
          >
            {itemData.descripcion}
          </Typography>
          <Typography sx={{ paddingTop: 2 }}>
            Stock: {itemData.stock} unidades
          </Typography>
        </CardContent>
      </Card>

      <div>
        <ProductCount itemData={itemData} />
      </div>
    </div>
  );
};

export default CardDetail;
