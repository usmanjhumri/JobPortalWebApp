import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CommonPage from '../../components/commonPage/CommonPage';
import { storageKey } from '../../Const/Const';
import { useNavigate } from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Profille() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem(storageKey)
    navigate('/login')
    console.log("working")
  }

  return (
    <>
      <CommonPage value="Profile" />

      <Box mt={12}
        sx={{ flexGrow: 1, display: 'flex', }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Personal Information" {...a11yProps(1)} />
          <Tab label="Educations" {...a11yProps(2)} />
          <Tab label="Skills" {...a11yProps(3)} />
          <Tab label="Experience" {...a11yProps(4)} />
          <Tab label="Logout" onClick={handleLogout} {...a11yProps(5)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
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


      </Box>
    </>
  );
}