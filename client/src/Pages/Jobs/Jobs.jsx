import { Box, Container } from "@mui/material"
import { Button, Input, Option, Select } from "@mui/joy";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import LocationOn from "@mui/icons-material/LocationOn";
import jobsStyle from "./JobsStyle";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CommonPage from "../../components/commonPage/CommonPage";
import CommonJobs from "../../components/commonJobs/CommonJobs";

const Jobs = () => {
    return (
        <>

            <CommonPage value="Jobs" />
            <Box mt={6}>
                <Container>
                    <Box sx={jobsStyle.jobSearchmainBox}>
                        <Input fullWidth
                            placeholder="Your location"
                            endDecorator={<LocationOn sx={{ color: "#fe9703", fontSize: "18px" }} />}
                            sx={jobsStyle.jobSearchInput}
                        />
                        <Select autoFocus
                            placeholder="Select a Job..."
                            indicator={<KeyboardArrowDown />}
                            sx={jobsStyle.searchSelect}
                        >
                            <Option value="developer">Web Developer</Option>
                            <Option value="graphics">Graphic Designer</Option>
                            <Option value="seo">SEO Expert</Option>
                        </Select>
                        <Button fullWidth sx={{ padding: "0.7rem 1rem", bgcolor: "#fe9703" }} endDecorator={<ArrowForwardIcon />}>
                            Find Jobs
                        </Button>
                    </Box>
                </Container>
                <CommonJobs />

            </Box>
        </>
    )
}

export default Jobs