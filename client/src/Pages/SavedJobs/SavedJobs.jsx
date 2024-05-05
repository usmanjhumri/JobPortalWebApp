import { Box, Typography } from "@mui/material";
import AllJobs from "../../components/commonJobs/AllJobs";
import { useState } from "react";
import CommonPage from "../../components/commonPage/CommonPage";
import { useSelector } from "react-redux";
import { getUserSliceData } from "../../RTK/Slice/SignInSlice";

const Jobs = () => {
  //   const { state } = useLocation();
  //   const dispatch = useDispatch();
  //   const { jobs } = useSelector(GetJobDetails);
  const [alljobs, setalljobs] = useState([]);
  const { isLoggedIn } = useSelector(getUserSliceData);
  //   useEffect(() => {
  //     if (!jobs) {
  //       dispatch(GetJobs());
  //     }
  //   }, [dispatch]);
  //   useEffect(() => {
  //     if (jobs !== null) {
  //       setalljobs(jobs);
  //     }
  //   }, [jobs]);
  return (
    <>
      <CommonPage value="Saved Jobs" />
      <Box mt={6}>
        {!isLoggedIn ? (
          <Typography variant="h6">You need to Login first.</Typography>
        ) : (
          <AllJobs alljobs={alljobs} />
        )}
      </Box>
    </>
  );
};

export default Jobs;
