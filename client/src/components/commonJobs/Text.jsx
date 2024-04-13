import { Box, Button, Container, Typography } from "@mui/material";
import CommonJobsStyle from "./styles";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles(() => {
  return {
    button: {
      padding: "10px 20px !important",
      marginTop: "10px !important",
      backgroundColor: "#26ae61 !important",
      borderRadius: "10px",
    },
  };
});

const Text = () => {
  const { button } = useStyle();
  const navigate = useNavigate();
  return (
    <>
      <Box mt={3}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={CommonJobsStyle.recentJob}>
            Recent Jobs Available
          </Typography>
          <Typography sx={CommonJobsStyle.recentJobssubtitle}>
            recent job opportunities waiting for your expertise. Our job portal
          </Typography>

          <Button
            className={button}
            variant="contained"
            onClick={() => {
              navigate("/jobs");
            }}
          >
            Explore More Jobs
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Text;
