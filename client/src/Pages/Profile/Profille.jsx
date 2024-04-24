/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Container, Typography } from "@mui/material";
import CommonPage from "../../components/commonPage/CommonPage";
import { useState } from "react";
import Education from "../../components/Profile/Education";
import PersonalInformation from "../../components/Profile/PersonalInformation";
import Skills from "../../components/Profile/Skills";
import Experience from "../../components/Profile/Experience";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px 0px",
    },
    subContainer: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
      boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
  };
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Profile() {
  const [value, setValue] = useState(0);
  const { container, subContainer } = useStyle();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setValue((prevValue) => (prevValue + 1) % tabs.length);
  };
  const handleBack = () => {
    setValue((prevValue) => (prevValue - 1) % tabs.length);
  };

  // Define your tabs as an array of objects
  const tabs = [
    { label: "Personal Information" },
    { label: "Educations" },
    { label: "Skills" },
    { label: "Experience" },
  ];

  return (
    <>
      <CommonPage value="Profile" />
      <Box className={container}>
        <Box className={subContainer}>
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            scrollButtons

            allowScrollButtonsMobile
            TabIndicatorProps={{ sx: { display: "none" } }}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} disabled />
            ))}
          </Tabs>

          <Container>
            {tabs.map((tab, index) => (
              <TabPanel key={index} value={value} index={index}>
                {index === 0 && (
                  <PersonalInformation
                    handleNext={handleNext}
                    index={index}
                    handleBack={handleBack}
                  />
                )}
                {index === 1 && (
                  <Education
                    handleNext={handleNext}
                    index={index}
                    handleBack={handleBack}
                  />
                )}
                {index === 2 && (
                  <Skills
                    handleNext={handleNext}
                    index={index}
                    handleBack={handleBack}
                  />
                )}
                {index === 3 && (
                  <Experience
                    handleNext={handleNext}
                    index={index}
                    handleBack={handleBack}
                  />
                )}
              </TabPanel>
            ))}
          </Container>
        </Box>
      </Box>
    </>
  );
}
