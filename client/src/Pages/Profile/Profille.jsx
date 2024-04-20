/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Container, InputLabel, Typography } from '@mui/material';
import CommonPage from '../../components/commonPage/CommonPage';
import { useState } from 'react';
import { Input } from '@mui/joy';
import { FaCalendarAlt, FaLanguage, FaRegFlag, FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { Button } from '@mui/joy';
import contactStyle from '../ContactUs/contactStyle';
import { FaRegAddressCard } from "react-icons/fa";
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Textarea from '@mui/joy/Textarea';
import { LiaPenAltSolid } from 'react-icons/lia';
import { GrCertificate } from "react-icons/gr";
import { BiSolidInstitution } from "react-icons/bi";
import { SiStudyverse } from "react-icons/si";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setValue((prevValue) => (prevValue + 1) % tabs.length);
  };

  // Define your tabs as an array of objects
  const tabs = [
    { label: "Profile" },
    { label: "Personal Information" },
    { label: "Educations" },
    { label: "Skills" },
    { label: "Experience" }
  ];

  return (
    <>
      <CommonPage value="Profile" />
      <Box mt={12}>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          scrollButtons
          allowScrollButtonsMobile
          TabIndicatorProps={{ sx: { display: "none" } }}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>

        <Container>
          {tabs.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              {index === 0 && (
                <Box component="form">
                  <Box sx={contactStyle.fullNameEmail}>
                    <div style={{ width: "100%" }}>
                      <label htmlFor="">First Name</label>
                      <Input fullWidth sx={{ margin: "1rem 0" }}
                        placeholder="Enter Your First Name"
                        endDecorator={<FaRegUser style={contactStyle.inputicons} />}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <label htmlFor="">Last Name</label>
                      <Input fullWidth sx={{ margin: "1rem 0" }}
                        placeholder="Enter Your Last Name"
                        endDecorator={<FaRegUser style={contactStyle.inputicons} />}
                      />
                    </div>
                  </Box>
                  <Box sx={contactStyle.fullNameEmail}>
                    <div style={{ width: "100%" }}>
                      <InputLabel>Your Email</InputLabel>
                      <Input fullWidth sx={{ margin: "1rem 0" }}
                        placeholder="Enter your Email Address"
                        endDecorator={<MdOutlineEmail style={contactStyle.inputicons} />}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <InputLabel>Your Phone Number</InputLabel>
                      <Input fullWidth
                        placeholder="Enter Your Phone Number"
                        endDecorator={<AiOutlinePhone style={contactStyle.inputicons} />}
                        sx={{ margin: "1rem 0" }}
                      />
                    </div>
                  </Box>
                  <Input fullWidth
                    placeholder="Enter Your Address"
                    endDecorator={<FaRegAddressCard style={contactStyle.inputicons} />}
                    sx={{ margin: "1rem 0" }}
                  />
                  <Box sx={contactStyle.fullNameEmail}>
                    <Button fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }} type='submit' >
                      Update
                    </Button>
                    <Button onClick={handleNext} fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }}  >
                      Next
                    </Button>
                  </Box>
                </Box>
              )}
              {index === 1 && (
                <Box component="form">
                  <Box sx={contactStyle.fullNameEmail}>
                    <Input type='date' fullWidth sx={{ margin: "1rem 0", outline: "none", background: `url(${<FaCalendarAlt />})` }}
                      placeholder="Enter Your Last Name"
                    />
                    <Select

                      placeholder="Select a your gender"
                      indicator={<KeyboardArrowDown />}
                      sx={{
                        width: "100%",
                        [`& .${selectClasses.indicator}`]: {
                          transition: '0.2s',
                          [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                          },
                        },
                      }}
                    >
                      <Option value="male">Male</Option>
                      <Option value="Female">Female</Option>

                    </Select>
                  </Box>
                  <Box sx={contactStyle.fullNameEmail}>
                    <Input fullWidth sx={{ margin: "1rem 0" }}
                      placeholder="Enter your Nationality"
                      endDecorator={<FaRegFlag style={contactStyle.inputicons} />}
                    />
                    <Input fullWidth
                      placeholder="Enter Your Language"
                      endDecorator={<FaLanguage style={contactStyle.inputicons} />}
                      sx={{ margin: "1rem 0" }}
                    />
                  </Box>
                  <Textarea
                    placeholder="Write Your Message"
                    startDecorator={<LiaPenAltSolid style={contactStyle.textArea} />}
                    minRows={6}
                  />
                  <Box sx={contactStyle.fullNameEmail}>
                    <Button fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }} type='submit' >
                      Update
                    </Button>
                    <Button onClick={handleNext} fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }}  >
                      Next
                    </Button>
                  </Box>
                </Box>
              )}
              {index === 2 && (
                <Box component="form">
                  <Box sx={contactStyle.fullNameEmail}>
                    <Box sx={{ width: "100%" }}>
                      <label htmlFor="">Degree/Certificate Name</label>
                      <Input fullWidth sx={{ margin: "1rem 0", outline: "none" }}
                        placeholder="Degree/Certificate Name"
                        endDecorator={<GrCertificate style={contactStyle.inputicons} />}
                      />
                    </Box>

                    <div style={{ width: "100%" }}>
                      <label htmlFor="">Degree/Certificate Name</label>

                      <Input fullWidth sx={{ margin: "1rem 0", outline: "none" }}
                        placeholder="Institution Name"
                        endDecorator={<BiSolidInstitution style={contactStyle.inputicons} />}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <label htmlFor="">Field of Study</label>
                      <Input fullWidth sx={{ margin: "1rem 0" }}
                        placeholder="Field of Study"
                        endDecorator={<SiStudyverse style={contactStyle.inputicons} />}
                      />
                    </div>


                  </Box>
                  <Box sx={contactStyle.fullNameEmail}>
                    <div style={{ width: "100%" }}>
                      <label htmlFor="">Start Date</label>
                      <Input type='date' fullWidth sx={{ margin: "1rem 0", outline: "none", }}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <label htmlFor="">End Date</label>
                      <Input type='date' fullWidth sx={{ margin: "1rem 0", outline: "none", }}
                      />
                    </div>
                  </Box>
                  <label htmlFor="">GPA/Grade</label>
                  <Input fullWidth sx={{ margin: "1rem 0" }}
                    placeholder="GPA/Grade"
                    endDecorator={<SiStudyverse style={contactStyle.inputicons} />}
                  />                  <Box sx={contactStyle.fullNameEmail}>
                    <Button fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }} type='submit' >
                      Update
                    </Button>
                    <Button onClick={handleNext} fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }}  >
                      Next
                    </Button>
                  </Box>
                </Box>
              )}
            </TabPanel>
          ))}
        </Container>
      </Box>
    </>
  );
}
