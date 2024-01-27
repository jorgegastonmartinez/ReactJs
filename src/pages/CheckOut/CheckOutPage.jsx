import React, { useState } from 'react'

import "./CheckOutPage.css";

import MessageSuccessful from '../../components/MessageSuccessful/MessageSuccessful';

import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

import TextField from '@mui/material/TextField';

const styles = {
    containerShop: {
        textAlign: "center",
        paddingTop: 20,
    },
};

const initialState = {
    name: "",
    lastName: "",
    city: "",
};



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const CheckOutPage = () => {

  const notify = () => toast("Su compra se realizó con exito!!");


  const [values, setValues] = useState(initialState);

  const [purchaseID, setPurchaseId] = useState(null); 

  const onChange = (e) => {
      const { value, name } = e.target; 

      setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "purchaseCollection"), {
          values,
      });
      setPurchaseId(docRef.id);
      setValues(initialState); 
  };

return (
  <div style={styles.containerShop}>
      <h1 style={{ color: "black" }} >complete los datos para finalizar el pedido</h1>
      <form className='FormContainer' onSubmit={onSubmit}>
          <TextField
          placeholder='NAME'
          style={{ margin: 10, width: 400 }}
          name='name'
          value={values.name}
          onChange={onChange}
          required
          />
          <TextField
          placeholder='LAST NAME'
          style={{ margin: 10, width: 400 }}
          name='lastName'
          value={values.lastName}
          onChange={onChange}
          required
          />
          <TextField
          placeholder='CITY'
          style={{ margin: 10, width: 400 }}
          name='city'
          value={values.city}
          onChange={onChange}
          required
          />
          <button className='btnASendAction' onClick={notify}>
              ENVIAR
          </button>
          <ToastContainer />
      </form>

      {purchaseID ? <MessageSuccessful purchaseID={purchaseID}/> : null}
  </div>




)
}
  export default CheckOutPage;