import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { getApplicationData } from "../../Redux/Slice/ApplicationSlice/ApplicationSlice";
// import { makeStyles } from "@mui/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  Height: "100%",
  maxHeight: "80vh",
  overflowX: "scroll",
  p: 2,
};

// const useStyle = makeStyles(() => {
//   return {
//     topBar: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     },
//   };
// });

const ViewProfileModal = ({ open, setOpen, id }) => {
  console.log(id);
  //   const { topBar } = useStyle();
  const { allApplications } = useSelector(getApplicationData);
  const [profiledata, setProfileData] = useState(null);
  useEffect(() => {
    let data = allApplications.find((f) => f?._id === id);
    setProfileData(data);
  }, [id]);

  console.log(profiledata);

  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{id}</Box>
      </Modal>
    </Box>
  );
};

export default ViewProfileModal;
ViewProfileModal.propTypes = {
  open: PropTypes.any,
  setOpen: PropTypes.any,
  id: PropTypes.any,
};
