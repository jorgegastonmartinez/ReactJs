import React from "react";
import "./HomePage.css";

// components
import ItemList from "../../components/ItemList/ItemList";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const HomePage = () => {
  return (
    <div>
      <ItemListContainer />
      <h1 className="title-all-products">TODOS LOS PRODUCTOS</h1>
      <ItemList />
    </div>
  );
};

export default HomePage;
