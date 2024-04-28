import { Box, Container, Typography, Grid } from "@mui/material";
import PopularStyle from "./PopularStyle";
import "./Popular.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetCategoryStatus } from "../../RTK/Slice/CategoriesSlice";
import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Popular = () => {
  const { Categories } = useSelector(GetCategoryStatus);
  const [allcategories, setallcategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (Categories !== null) {
      setallcategories(Categories);
    }
  }, [Categories]);

  const handleNavigation = (data) => {
    navigate("/jobs", { state: { path: "category", title: data } });
  };

  return (
    <Box mt={6} pb={2}>
      <Typography variant="h4" sx={PopularStyle.category}>
        Popular Categories
      </Typography>
      <Typography sx={PopularStyle.expolre}>
        Explore our Job Portals to streamline your job search. From the
        cutting-edge world of Technology to the strategic realm of Finance
      </Typography>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {allcategories?.map((dt, i) => {
            return (
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                key={i}
                sx={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              >
                <Box
                  className="hoverBox"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    backgroundColor: "#fff",
                    p: 2,
                    height: "120px",
                    gap: "5px",
                  }}
                >
                  <Box
                    className="icon"
                    sx={{
                      color: "#26ae61",
                      fontSize: "35px",
                    }}
                  >
                    <WorkOutlineIcon />
                  </Box>
                  <Box>
                    <Typography
                      className="icon"
                      variant="h6"
                      sx={{
                        color: "#1c2733",
                        fontWeight: "700",
                      }}
                    >
                      {dt.title}
                    </Typography>
                  </Box>
                  <Box
                    className="arrowicon"
                    onClick={() => handleNavigation(dt?.title)}
                    sx={PopularStyle.arrowIcons}
                  >
                    <ArrowForwardIosIcon />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Popular;
