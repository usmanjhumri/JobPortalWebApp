import { Box, Container } from "@mui/material";
import { Button, Input, Option, Select } from "@mui/joy";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import LocationOn from "@mui/icons-material/LocationOn";
import jobsStyle from "./JobsStyle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CommonPage from "../../components/commonPage/CommonPage";
import { useLocation } from "react-router-dom";
import AllJobs from "../../components/commonJobs/AllJobs";
import { useDispatch, useSelector } from "react-redux";
import { GetJobDetails } from "../../RTK/Slice/JobSlice";
import { useEffect, useState } from "react";
import { GetJobs } from "../../RTK/API/api";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Jobs = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { jobs } = useSelector(GetJobDetails);
  const [alljobs, setalljobs] = useState(null);
  const [values, setvalues] = useState({ title: "", location: "" });

  useEffect(() => {
    if (!jobs) {
      dispatch(GetJobs());
    }
  }, [dispatch]);
  useEffect(() => {
    if (jobs !== null) {
      setalljobs(jobs);
    }
  }, [jobs]);
  useEffect(() => {
    if (state) {
      setvalues(state);
      let filvalues = jobs?.filter(
        (f) =>
          f?.title?.toLowerCase()?.includes(state?.title?.toLowerCase()) &&
          f?.location?.toLowerCase()?.includes(state?.location?.toLowerCase())
      );
      setalljobs(filvalues);
    }
  }, [state]);
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const filtervalues = () => {
    let filvalues = jobs?.filter(
      (f) =>
        f?.title?.toLowerCase()?.includes(values?.title?.toLowerCase()) &&
        f?.location?.toLowerCase()?.includes(values?.location?.toLowerCase())
    );
    setalljobs(filvalues);
  };

  return (
    <>
      <CommonPage value="Jobs" />
      <Box mt={6}>
        <Container>
          <Box sx={jobsStyle.jobSearchmainBox}>
            <Input
              fullWidth
              placeholder="Job Title"
              value={values?.title}
              name="title"
              onChange={handleChange}
              endDecorator={
                <WorkOutlineIcon sx={{ color: "#26ae61", fontSize: "18px" }} />
              }
              sx={jobsStyle.jobSearchInput}
            />
            <Input
              fullWidth
              placeholder="Job location"
              value={values?.location}
              name="location"
              onChange={handleChange}
              endDecorator={
                <LocationOn sx={{ color: "#26ae61", fontSize: "18px" }} />
              }
              sx={jobsStyle.jobSearchInput}
            />
            <Button
              fullWidth
              sx={{
                padding: "0.7rem 1rem",
                bgcolor: "#55d38c",
                "&:hover": {
                  bgcolor: "#26ae61",
                },
              }}
              endDecorator={<ArrowForwardIcon />}
              onClick={filtervalues}
            >
              Find Jobs
            </Button>
          </Box>
        </Container>
        <AllJobs alljobs={alljobs} />
      </Box>
    </>
  );
};

export default Jobs;
