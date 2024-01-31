import "./CheckOutPage.css";
import MessageSuccessful from "../../components/MessageSuccessful/MessageSuccessful";

import React, { useState } from "react";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// MUI
import TextField from "@mui/material/TextField";

// TOASTIFY
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  repetirEmail: "",
};

const CheckOutPage = () => {
  const [items, setItems] = useContext(ItemsContext);

  const [values, setValues] = useState(initialState);

  const [purchaseID, setPurchaseId] = useState(null);

  const onChange = (e) => {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (values.email !== values.repetirEmail) {
      toast.error("el email ingresado no coincide", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const docRef = await addDoc(collection(db, "storeOrders"), {
      values,
      items,
    });

    setPurchaseId(docRef.id);

    setValues(initialState);

    setItems([]);
  };

  const notify = () => {
    if (
      Object.values(values).every((value) => value !== "") &&
      items.length > 0 &&
      values.email === values.repetirEmail
    ) {
      toast.success("Su compra fue realizada con exito", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <h1 className="title-checkout">
        complete los datos para finalizar el pedido
      </h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Nombre"
          style={{ margin: 10, width: 400 }}
          name="nombre"
          value={values.nombre}
          onChange={onChange}
          required
        />
        <TextField
          placeholder="Apellido"
          style={{ margin: 10, width: 400 }}
          name="apellido"
          value={values.apellido}
          onChange={onChange}
          required
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.email}
          onChange={onChange}
          required
        />
        <TextField
          placeholder="Repetir Email"
          style={{ margin: 10, width: 400 }}
          name="repetirEmail"
          value={values.repetirEmail}
          onChange={onChange}
          required
        />
        <button
          className="btn-finished"
          onClick={notify}
          disabled={items.length === 0}
        >
          FINALIZAR COMPRA
        </button>
        <ToastContainer />
      </form>

      {purchaseID ? <MessageSuccessful purchaseID={purchaseID} /> : null}
    </div>
  );
};
export default CheckOutPage;
