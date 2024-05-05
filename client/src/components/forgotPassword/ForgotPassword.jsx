import { Box, Container, Typography } from "@mui/material"
import CommonPage from "../commonPage/CommonPage"
import { Button, Input } from "@mui/joy"
import { MdOutlineEmail } from "react-icons/md"
import contactStyle from "../../Pages/ContactUs/contactStyle"


const ForgotPassword = () => {

    const handlemailsent = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <CommonPage value="Forgot Password" />
            <Box mt={12}>
                <Container>
                    <Box component='form' onSubmit={handlemailsent}>
                        <Typography>Enter Your Email</Typography>
                        <Input fullWidth sx={{ margin: "1rem 0" }}
                            placeholder="Enter your Email Address"
                            endDecorator={<MdOutlineEmail style={contactStyle.inputicons} />}
                        />
                        <Button fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }} type='submit'>
                            Send Message
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default ForgotPassword