import { Box, Container, Grid } from "@mui/material"
import CommonPage from "../../components/commonPage/CommonPage"
import { Button, Input, Textarea } from "@mui/joy"
import { AiOutlinePhone } from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md"
import { FaRegUser, FaSackDollar } from "react-icons/fa6"
import ApplicationFormStyle from "./ApplicationFormStyle"
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaAssistiveListeningSystems, FaFilePdf, FaLink, FaRegAddressCard } from "react-icons/fa"
import { SlEnvolopeLetter } from "react-icons/sl";

const ApplicationForm = () => {
    return (
        <>
            <CommonPage value="Application Form" />
            <Box>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Box component="form">
                                <Box sx={ApplicationFormStyle.fullNameEmail}>
                                    <Input fullWidth sx={{ margin: "1rem 0" }}
                                        placeholder="Enter Your Full Name"
                                        endDecorator={<FaRegUser style={ApplicationFormStyle.inputicons} />}
                                    />
                                    <Input fullWidth sx={{ margin: "1rem 0" }}
                                        placeholder="Enter your Email Address"
                                        endDecorator={<MdOutlineEmail style={ApplicationFormStyle.inputicons} />}
                                    />
                                </Box>
                                <Box sx={ApplicationFormStyle.fullNameEmail}>
                                    <Input fullWidth sx={{ margin: "1rem 0" }}
                                        placeholder="Enter Your DOB"
                                        endDecorator={<LiaBirthdayCakeSolid style={ApplicationFormStyle.inputicons} />}
                                    />
                                    <Input fullWidth sx={{ margin: "1rem 0" }}
                                        placeholder="Enter your  Address"
                                        endDecorator={<FaRegAddressCard style={ApplicationFormStyle.inputicons} />}
                                    />
                                </Box>
                                <Box sx={ApplicationFormStyle.fullNameEmail}>
                                    <Input fullWidth sx={{ margin: "1rem 0" }}
                                        placeholder="Enter Your Portfolio Link"
                                        endDecorator={<FaLink style={ApplicationFormStyle.inputicons} />}
                                    />
                                    <Input fullWidth type="file" accept=".pdf" sx={{ margin: "1rem 0" }}
                                        placeholder="Upload Your Resume"
                                        endDecorator={<FaFilePdf style={ApplicationFormStyle.inputicons} />}
                                    />
                                </Box>
                                <Box sx={ApplicationFormStyle.fullNameEmail}>
                                    <Input fullWidth
                                        placeholder="Enter Your Phone Number"
                                        endDecorator={<AiOutlinePhone style={ApplicationFormStyle.inputicons} />}
                                        sx={{ margin: "1rem 0" }}
                                    />
                                    <Input fullWidth sx={{ margin: "1rem 0" }}
                                        placeholder="Salary Expectations"
                                        endDecorator={<FaSackDollar style={ApplicationFormStyle.inputicons} />}
                                    />
                                </Box>
                                <Textarea sx={{ margin: "1rem 0" }}
                                    placeholder="How Did You Hear About Us? (Optional)"
                                    startDecorator={<FaAssistiveListeningSystems style={ApplicationFormStyle.textArea} />}
                                    minRows={4}
                                />
                                <Textarea sx={{ margin: "1rem 0" }}
                                    placeholder="Cover Letter"
                                    startDecorator={<SlEnvolopeLetter style={ApplicationFormStyle.textArea} />}
                                    minRows={6}
                                />
                                <Button fullWidth sx={{ background: "#26ae61", margin: "1rem 0", fontSize: "1.5rem" }} type='submit'>
                                    Submit
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default ApplicationForm