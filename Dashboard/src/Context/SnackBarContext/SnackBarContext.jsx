import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SnackBarContext = createContext();

const SnackBarContextProvider = (props) => {
  const [snackBarData, setsnackBarData] = useState({
    type: "",
    message: "",
    openToast: false,
  });

  return (
    <SnackBarContext.Provider value={{ snackBarData, setsnackBarData }}>
      {props.children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarContextProvider;

SnackBarContextProvider.propTypes = {
  children: PropTypes.any,
};
