import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Divider, Modal, Typography } from "@mui/material";
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

        <Box sx={style}>
          <Divider />
          <Box>
            usman
            {/* {
              profiledata?.personalInformation?.map((item, ind) => {
                return (
                  <>
                    <Typography key={ind} variant="h4">{item.name} {item.fathername}</Typography>
                    <Divider mt={2} />
                    <Box mt={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{item.country}</Typography>
                      <Typography>{item.street}</Typography>
                    </Box>
                  </>
                );
              })
            } */}
          </Box>
          <Box mt={3}>
            <Typography variant="h4">Skills</Typography>
            {
              profiledata?.skills?.map((item, ind) => {
                return (
                  <>
                    <Box
                      key={ind}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{item.title}</Typography>
                      <Typography>{item.level}</Typography>
                    </Box>
                  </>
                );
              })
            }
          </Box>
          <Box mt={3}>
            {
              profiledata?.education?.map((item, ind) => {
                return (
                  <>
                    <Typography key={ind} variant="h4">Education</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="h5">{item.degree}</Typography>
                        <Typography>{item.institude}</Typography>
                      </Box>
                      <Typography>passing year</Typography>
                    </Box>
                  </>
                );
              })
            }

          </Box>
          <Box mt={3}>
            <Typography variant="h4">Work Experience</Typography>
            {profiledata?.experience?.map((item, ind) => {
              return (
                <>
                  <Box key={ind}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="h5">{item.job}</Typography>
                      <Typography>{item.institude}</Typography>
                    </Box>
                    <Typography>passing year</Typography>
                  </Box>
                </>
              );
            })}

          </Box>
        </Box>
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
