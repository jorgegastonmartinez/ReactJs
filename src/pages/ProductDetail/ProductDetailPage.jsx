import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// FIREBASE - FIRESTORE
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

// components
import Spinner from "../../components/Spinner/Spinner";
import CardDetail from "../../components/CardDetail/CardDetail";

const ProductDetailPage = () => {

  const [itemData, setItemData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getMenus = async () => {
      const q = query(collection(db, "tienda"), where(documentId(), "==", id));
      const docs = [];

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setItemData(docs);

    };

    getMenus();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [id]);

  return (
    <div className="DetailContainer">
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="ItemsListDetailContainer">
          {itemData.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/item-detail/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardDetail itemData={item} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;