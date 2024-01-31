import React from "react";
import "./Gallery.css";

// img
import img1 from "../../assets/img-gallery-6.jpg";
import img2 from "../../assets/gallery-5.jpg";
import img3 from "../../assets/gallery-4.jpg";
import img4 from "../../assets/por_bs_as.jpg";
import img5 from "../../assets/por_bs_as2.jpg";
import img6 from "../../assets/por_bs_as3.jpg";

const Gallery = () => {
  return (
    <div>
      <img src="" alt="" />
      <h2 className="gineses-title">NUESTROS SAN GINESES</h2>
      <p className="gineses-text">
        Mirá nuestra carta y tentate con nuestra propuesta de chocolate con
        churros y porras. Y si estas con ganas de algo salado tenemos ensaladas,
        bocatas, tostados y más. Descubrilos!
      </p>
      <div className="Container-gallery">
        <img
          src={img1}
          alt="Bocata de jamón, churros, chocolate y café con leche"
        />
        <img src={img2} alt="Arte latte" />
        <img
          src={img3}
          alt="Ensalada vegetariana, ensalada de pollo y ensalada de atún"
        />
        <img src={img4} alt="por bs as" />
        <img src={img5} alt="por bs as" />
        <img src={img6} alt="por bs as" />
      </div>
    </div>
  );
};

export default Gallery;
