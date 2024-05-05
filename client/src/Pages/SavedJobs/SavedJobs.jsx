import { Box, Typography } from "@mui/material";
import AllJobs from "../../components/commonJobs/AllJobs";
import { useEffect, useState } from "react";
import CommonPage from "../../components/commonPage/CommonPage";
import { useDispatch, useSelector } from "react-redux";
import { getUserSliceData } from "../../RTK/Slice/SignInSlice";
import { Link } from "react-router-dom";
import { GetSavedJobsDetails } from "../../RTK/Slice/SavedJobSlice";
import { GetSaveJobs } from "../../RTK/API/api";
import Loader from "../../components/Loader/Loader";

const Jobs = () => {
  const dispatch = useDispatch();
  const [alljobs, setalljobs] = useState([]);
  const { isLoggedIn } = useSelector(getUserSliceData);
  const { saved, stat } = useSelector(GetSavedJobsDetails);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(GetSaveJobs());
    }
  }, [dispatch]);
  useEffect(() => {
    console.log(saved);
    if (saved?.jobs) {
      setalljobs(saved?.jobs);
    }
  }, [saved]);
  return (
    <>
      <CommonPage value="Saved Jobs" />
      {stat === "pending" ? (
        <Loader />
      ) : (
        <Box mt={6}>
          {!isLoggedIn ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">
                You need to Login first. <Link to={"/login"}>Go To Login</Link>
              </Typography>
            </Box>
          ) : (
            <AllJobs alljobs={alljobs} />
          )}
        </Box>
      )}
    </>
  );
};

export default Jobs;
