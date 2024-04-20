import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, IconButton, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import parse from "html-react-parser";

import CloseIcon from "@mui/icons-material/Close";
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

const useStyle = makeStyles(() => {
  return {
    topBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };
});

const JobDescModal = ({ open, setOpen, desc }) => {
  console.log(desc);
  const { topBar } = useStyle();
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className={topBar}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Job Description
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="20" />
            </IconButton>
          </Box>
          <Divider />
          <Box>{parse(desc ? desc : "<p>No Description</p>")}</Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default JobDescModal;
JobDescModal.propTypes = {
  open: PropTypes.any,
  setOpen: PropTypes.any,
  desc: PropTypes.any,
};
