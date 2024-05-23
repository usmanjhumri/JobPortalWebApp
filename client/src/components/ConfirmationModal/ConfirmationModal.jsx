import { Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GetProfileDetails } from "../../RTK/Slice/ProfileSlice";
import ReactLoading from "react-loading";

import axiosInstance from "../../Const/AxiosInstance";
import ToastMessage from "../../ToastMessage/ToastMessage";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "450px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ConfirmationModal = ({ open, setOpen, jobId }) => {
  const { profileID, personalInformations, EducationDetails, SkillDetails } =
    useSelector(GetProfileDetails);
  const [loading, setloading] = useState(false);
  const handleClose = () => setOpen(false);
  console.log(personalInformations);
  console.log(EducationDetails);
  console.log(SkillDetails);
  const handleApplyJob = async () => {
    if (
      !personalInformations ||
      personalInformations?.name?.length < 1 ||
      personalInformations?.fathername?.length < 1 ||
      personalInformations?.city?.length < 1 ||
      personalInformations?.country?.length < 1 ||
      !EducationDetails ||
      EducationDetails.length < 1 ||
      !SkillDetails ||
      SkillDetails.length < 1
    ) {
      ToastMessage({
        message: "Please update you profile first...!",
        type: "error",
      });
      return;
    }
    setloading(true);
    const obj = {
      jobId: jobId,
      profileID: profileID,
    };

    const res = await axiosInstance.post("/jobs/applyjob", obj);
    if (res.data.isSuccess) {
      setloading(false);
      ToastMessage({ message: res.data?.message, type: res.data?.status });
      handleClose();
    }

    setloading(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Apply For Job.
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to apply for this job using your profile
          details.?
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "20px",
          }}
        >
          {loading ? (
            <ReactLoading
              type={"bars"}
              color={"#26ab5f"}
              height={"40px"}
              width={"50px"}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#26ae61 !important",
                  color: "white !important",
                }}
                onClick={handleApplyJob}
              >
                Confirm
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
