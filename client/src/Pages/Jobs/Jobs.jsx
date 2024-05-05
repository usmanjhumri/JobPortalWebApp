import { Box, Container } from "@mui/material";
import { Button, Input, Option, Select } from "@mui/joy";
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
import { GetCategoryStatus } from "../../RTK/Slice/CategoriesSlice";

const Jobs = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { jobs } = useSelector(GetJobDetails);
  const { Categories } = useSelector(GetCategoryStatus);
  const [alljobs, setalljobs] = useState(null);
  const [values, setvalues] = useState({
    title: "",
    location: "",
    category: "",
  });

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
    if (state?.path === "search") {
      setvalues({ ...values, ...state?.values });
      let filvalues = jobs?.filter(
        (f) =>
          f?.title
            ?.toLowerCase()
            ?.includes(state?.values?.title?.toLowerCase()) &&
          f?.location
            ?.toLowerCase()
            ?.includes(state?.values?.location?.toLowerCase())
      );
      setalljobs(filvalues);
    } else if (state?.path === "category") {
      setvalues({ ...values, category: state?.title });
      let filvalues = jobs?.filter((f) => f.category?.title === state?.title);
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
        f?.location?.toLowerCase()?.includes(values?.location?.toLowerCase()) &&
        f?.category?.title
          ?.toLowerCase()
          ?.includes(values?.category?.toLowerCase())
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
            <Select
              fullWidth
              placeholder="Job Category"
              value={values?.category}
              name="category"
              select
              onChange={(e, value) =>
                handleChange({ target: { name: "category", value: value } })
              }
              endDecorator={
                <LocationOn sx={{ color: "#26ae61", fontSize: "18px" }} />
              }
              sx={jobsStyle.jobSearchInput}
            >
              <Option value={""}>Select Category</Option>
              {Categories?.map((d, i) => {
                return (
                  <Option key={i} value={d?.title}>
                    {d?.title}
                  </Option>
                );
              })}
            </Select>
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
