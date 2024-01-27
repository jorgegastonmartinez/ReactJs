import React from 'react';

// components
import ItemList from '../../components/ItemList/ItemList';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';


const HomePage = () => {
  return (
    <div>
        <ItemListContainer />
        <h1>TODOS LOS PRODUCTOS</h1>
        <ItemList />
    </div>
  )
}

export default HomePage;