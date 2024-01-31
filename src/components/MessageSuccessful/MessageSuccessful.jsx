import * as React from "react";

// MUI
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSuccessful = ({ purchaseID }) => {
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">Número de orden: {purchaseID}</Alert>
      </Stack>
    </div>
  );
};

export default MessageSuccessful;
