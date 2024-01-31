import React from "react";
import "./ItemList.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CardProduct from "../CardProduct/CardProduct";
import Spinner from "../Spinner/Spinner";

// FIREBASE - FIRESTORE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemList = () => {
  const [itemsData, setItemsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMenus = async () => {
      const q = query(collection(db, "tienda"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setItemsData(docs);
    };

    getMenus();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <div className="Container-item">
          {itemsData.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/item-detail/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardProduct itemsData={item} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ItemList;