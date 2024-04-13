import { Alert, Snackbar } from "@mui/material";
import React, { useContext } from "react";
import { SnackBarContext } from '../../Context/SnackBarContext/SnackBarContext';

function SnackBar() {
  const { snackBarData, setsnackBarData } = useContext(SnackBarContext);
    const handelClose = () => {
        setsnackBarData({
          type: "",
          message: "",
          openToast: false,
        });
      };
  return (
    <Snackbar
      open={snackBarData?.openToast}
      autoHideDuration={6000}
      onClose={() => handelClose()
      }
      // sx={{backgroundColor:"red !important"}}
    >
      <Alert
        onClose={() => handelClose()}
        severity={"success"}

        sx={{ width: "100%",minWidth:"250px",}}
      >
        {snackBarData?.message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;