import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";



const MessageSuccessful = ({ purchaseID }) => {




  return (
    <div>
      <h4>Su compra fue realizada con exito ☑️</h4>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">Número de orden: {purchaseID}</Alert>
      </Stack>
      




    </div>
  );
};

export default MessageSuccessful;
