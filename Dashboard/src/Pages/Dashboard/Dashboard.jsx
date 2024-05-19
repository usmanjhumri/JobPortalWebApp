import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import BarChart from "../../Components/Charts/BarChart";
import { GetAllJobs } from "../../Redux/Slice/JobSlice/JobSlice";
import { useDispatch } from "react-redux";
const useStyle = makeStyles(() => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
    },
    cardContainer: {
      width: "100%",
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",

      gap: "20px",
    },
    graphCalanderContainer: {
      width: "100%",
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",

      gap: "20px",
      padding: "20px",
    },
    calandercontainer: {
      width: "100%",

      padding: "20px",
      height: "55vh",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    graphContainer: {
      width: "100%",

      padding: "20px",
      height: "55vh",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    calanderstyle: {
      width: "100% !important",
      height: "100% !important",
    },
  };
});

export default function Dashboard() {
  const {
    container,
    cardContainer,
    graphCalanderContainer,
    calandercontainer,
    graphContainer,
    calanderstyle,
  } = useStyle();
  const dispatch = useDispatch();
  const [data] = useState([
    {
      title: "categories",
      value: "10",
    },
    {
      title: "total jobs",
      value: "100",
    },
    {
      title: "total applications",
      value: "10",
    },
    {
      title: "total users",
      value: "10",
    },
  ]);
  useEffect(() => {
    dispatch(GetAllJobs());
  }, []);
  return (
    <Box className={container}>
      <Box
        className={cardContainer}
        sx={{ flexWrap: { md: "nowrap", xs: "wrap" } }}
      >
        {data?.map((d, i) => {
          return <Cards key={i} values={d} />;
        })}
      </Box>
      <Box className={graphCalanderContainer}>
        <Box className={calandercontainer}>
          <Calendar className={calanderstyle} />
        </Box>
        <Box className={graphContainer}>
          <BarChart />
        </Box>
      </Box>
    </Box>
  );
}
