import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Container, Typography } from '@mui/material';
import CommonPage from '../../components/commonPage/CommonPage';
import React from 'react';
import { Input } from '@mui/joy';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { Button } from '@mui/joy';
import contactStyle from '../ContactUs/contactStyle';
import { FaRegAddressCard } from "react-icons/fa";

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



export default function Profille() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNext = () => {
    setValue((pre) => pre + 1)
  }
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
          <Tab label="Profile" />
          <Tab label="Personal Information" />
          <Tab label="Educations" />
          <Tab label="Skills" />
          <Tab label="Experience" />
        </Tabs>

        <Container>
          <TabPanel value={value} index={0}>
            <Box component="form">
              <Box sx={contactStyle.fullNameEmail}>
                <Input fullWidth sx={{ margin: "1rem 0" }}
                  placeholder="Enter Your First Name"
                  endDecorator={<FaRegUser style={contactStyle.inputicons} />}
                />
                <Input fullWidth sx={{ margin: "1rem 0" }}
                  placeholder="Enter Your Last Name"
                  endDecorator={<FaRegUser style={contactStyle.inputicons} />}
                />
              </Box>
              <Box sx={contactStyle.fullNameEmail}>
                <Input fullWidth sx={{ margin: "1rem 0" }}
                  placeholder="Enter your Email Address"
                  endDecorator={<MdOutlineEmail style={contactStyle.inputicons} />}
                />
                <Input fullWidth
                  placeholder="Enter Your Phone Number"
                  endDecorator={<AiOutlinePhone style={contactStyle.inputicons} />}
                  sx={{ margin: "1rem 0" }}
                />
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
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box component="form">
              <Box sx={contactStyle.fullNameEmail}>
                <Input fullWidth sx={{ margin: "1rem 0" }}
                  placeholder="Enter Your First Name"
                  endDecorator={<FaRegUser style={contactStyle.inputicons} />}
                />
                <Input fullWidth sx={{ margin: "1rem 0" }}
                  placeholder="Enter Your Last Name"
                  endDecorator={<FaRegUser style={contactStyle.inputicons} />}
                />
              </Box>
              <Box sx={contactStyle.fullNameEmail}>
                <Input fullWidth sx={{ margin: "1rem 0" }}
                  placeholder="Enter your Email Address"
                  endDecorator={<MdOutlineEmail style={contactStyle.inputicons} />}
                />
                <Input fullWidth
                  placeholder="Enter Your Phone Number"
                  endDecorator={<AiOutlinePhone style={contactStyle.inputicons} />}
                  sx={{ margin: "1rem 0" }}
                />
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
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
        </Container>

      </Box>
    </>
  );
}