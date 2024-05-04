import { Box, Button, Typography } from "@mui/material";
import CommonPage from "../../components/commonPage/CommonPage";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetJobDetails } from "../../RTK/Slice/JobSlice";
import { makeStyles } from "@mui/styles";
import PlaceIcon from "@mui/icons-material/Place";
import WorkIcon from "@mui/icons-material/Work";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import parse from "html-react-parser";
import Swal from 'sweetalert2'
import moment from "moment";
const useStyle = makeStyles(() => {
  return {
    containerStyle: {
      display: "flex",
      alignItems: "top",
      justifyContent: "center",
      padding: "20px",
    },
    subContainer: {
      width: "100%",
      maxWidth: "1200px",
      padding: "20px",

      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    ImageContainer: {
      height: "150px",
      width: "150px",
      padding: "10px",
      borderRadius: "100%",
      border: "1px solid #26ae61",
    },
    TopSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "top",
      flexWrap: "wrap",
      gap: "20px",
    },
    ContentSection: {
      display: "flex",
      alignItems: "top",
      gap: "20px",
      flexWrap: "wrap",
    },
    jobDetailsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
    ItemsInRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
  };
});

const JobDetail = () => {
  const { state } = useLocation();
  const {
    containerStyle,
    subContainer,
    ImageContainer,
    TopSection,
    ContentSection,
    jobDetailsContainer,
    ItemsInRow,
  } = useStyle();
  const [selectedJob, setSelectedJob] = useState(null);
  const [sevedJobs, setSevedJobs] = useState([])

  const { jobs } = useSelector(GetJobDetails);
  const isLoggedIn = useSelector((state) => state.signInReducer.isLoggedIn)
  const handleSaveJobs = () => {
    if (jobs) {
      const jobVal = jobs.find((f) => f._id === state?.jobId)
      setSevedJobs([jobVal])
    }
  }
  const handleApply = () => {
    if (isLoggedIn) {
    } else {
      Swal.fire({
        title: "User not LoggedIn",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `},
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `}
      });
    }
  }

  useEffect(() => {
    if (jobs) {
      const val = jobs.find((f) => f._id === state?.jobId);
      setSelectedJob(val);
    }
  }, [state?.jobId]);

  return (
    <>
      <CommonPage value="Job Detail" />
      <Box className={containerStyle}>
        <Box className={subContainer}>
          <Box className={TopSection}>
            <Box className={ContentSection}>
              <Box className={ImageContainer}>
                <img
                  src="https://d341ezm4iqaae0.cloudfront.net/assets/2016/06/17184615/indeed-Hub-illustrations-10_lambdaoptimized.webp"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box className={jobDetailsContainer}>
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  {selectedJob?.title}
                </Typography>
                <Typography
                  sx={{ textTransform: "capitalize", color: "#26ae61" }}
                >
                  {selectedJob?.company}
                </Typography>
                <Box className={ItemsInRow}>
                  <PlaceIcon sx={{ color: "#26ae61" }} />
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {selectedJob?.location}
                  </Typography>
                </Box>
                <Box className={ItemsInRow}>
                  <Typography
                    variant=""
                    sx={{ color: "#26ae61", textTransform: "capitalize" }}
                  >
                    ${selectedJob?.salaryfrom} - ${selectedJob?.salaryto}
                  </Typography>
                  <Box className={ItemsInRow}>
                    <WorkIcon sx={{ color: "#26ae61" }} />
                    <Typography>{selectedJob?.experience}</Typography>
                  </Box>
                  <Box className={ItemsInRow}>
                    <NoteAltIcon sx={{ color: "#26ae61" }} />
                    <Typography>{selectedJob?.jobtype}</Typography>
                  </Box>
                </Box>
                <Box className={ItemsInRow}>
                  <Box className={ItemsInRow}>
                    <EditCalendarIcon sx={{ color: "#26ae61" }} />
                    <Typography>
                      {moment(selectedJob?.date).format("DD/MM/YYYY")}
                    </Typography>
                  </Box>
                  <Box className={ItemsInRow}>
                    <CalendarMonthIcon sx={{ color: "#26ae61" }} />
                    <Typography>
                      {moment(selectedJob?.lastdate).format("DD/MM/YYYY")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={ItemsInRow}>
              <Button variant="outlined" onClick={handleSaveJobs}>
                <FavoriteBorderIcon sx={{ color: "#26ae61" }} />
              </Button>
              <Button
                onClick={handleApply}
                variant="contained"
                sx={{
                  padding: "10px 20px",
                  background: "#26ae61",
                  transition: "0.3s",
                  "&:hover": {
                    background: "#26ae61",
                    transform: "scale(1.02)",
                  },
                }}
              >
                Apply
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6">Description:</Typography>
            <Box>
              {parse(
                selectedJob?.desc ? selectedJob?.desc : "<p>No Description</p>"
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JobDetail;
