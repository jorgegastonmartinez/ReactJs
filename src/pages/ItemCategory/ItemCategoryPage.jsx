import "./ItemCategoryPage.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// components
import CardProduct from "../../components/CardProduct/CardProduct";
import Spinner from "../../components/Spinner/Spinner";

// FIREBASE - FIRESTORE
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";

const ItemCategoryPage = () => {
  const [itemsData, setItemsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    const getMenus = async () => {
      const q = query(
        collection(db, "tienda"),
        where("categoria", "==", categoria)
      );

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
  }, [categoria]);

  return (
    <div>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div>
          <div className="Title-category">
            <h1>{categoria}</h1>
          </div>
          <div className="ItemsCategoryContainer">
            {itemsData.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`/item-detail/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardProduct itemsData={item}  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCategoryPage;
