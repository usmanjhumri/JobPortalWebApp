import { Box, Container, Typography } from "@mui/material"
import CommonPage from "../commonPage/CommonPage"
import { Button, Input } from "@mui/joy"
import { MdOutlineEmail } from "react-icons/md"
import contactStyle from "../../Pages/ContactUs/contactStyle"
import { useDispatch, useSelector } from 'react-redux'
import { ForGotPassword } from "../../RTK/API/api"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
    const isLoading = useSelector((state) => state.forgotReducer.isLoading)
    const disptach = useDispatch()
    const navigate = useNavigate()
    const handlemailsent = async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const response = await disptach(ForGotPassword({ email: data.get('email') }))
        let res = response.payload.status
        let message = response.payload.message
        if (res === 'success') {
            Swal.fire({
                title: message,
                showClass: {
                    popup: `
                   animate__animated
                   animate__fadeInUp
                   animate__faster
                 `,
                },
                hideClass: {
                    popup: `
                   animate__animated
                   animate__fadeOutDown
                   animate__faster
                 `,
                },
            });
            navigate('/login')
        } else if (res === 'failed') {
            let eMessage = response.payload.message
            Swal.fire({
                title: eMessage,
                showClass: {
                    popup: `
                   animate__animated
                   animate__fadeInUp
                   animate__faster
                 `,
                },
                hideClass: {
                    popup: `
                   animate__animated
                   animate__fadeOutDown
                   animate__faster
                 `,
                },
            });
        }
    }
    return (
        <>
            <CommonPage value="Forgot Password" />
            <Box mt={12}>
                <Container>
                    <Box component='form' onSubmit={handlemailsent}>
                        <Typography>Enter Your Email</Typography>
                        <Input fullWidth sx={{ margin: "1rem 0" }}
                            disabled={isLoading}
                            name="email"
                            id="email"
                            placeholder="Enter your Email Address"
                            endDecorator={<MdOutlineEmail style={contactStyle.inputicons} />}
                        />
                        <Button fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }} type='submit'>
                            {isLoading ? 'sending email' : 'send email'}
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default ForgotPassword