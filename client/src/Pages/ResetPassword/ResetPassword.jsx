import { Box, Container, Typography } from "@mui/material";
import { Button, Input } from "@mui/joy";
import { useDispatch } from 'react-redux';
import { userResetPassword } from "../../RTK/API/api";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import CommonPage from "../../components/commonPage/CommonPage";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";

const ResetPassword = () => {
    const { id, token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2)
    }
    const handleResetPassword = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const password = formData.get('password');
        const confirm_password = formData.get('confirm_password');

        if (!password || !confirm_password) {
            console.error("Password and Confirm Password are required.");
            return;
        }

        try {
            const response = await dispatch(userResetPassword({ id, token, data: { password, confirm_password } }));
            console.log(response.payload.status);
            let result = response.payload.status
            let message = response.payload.message
            if (result === "success") {
                Swal.fire({
                    title: "Success",
                    text: message,
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
            } else if (result === "failed") {
                let eMessage = response.payload.message
                Swal.fire({
                    title: "Error",
                    text: eMessage,
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
        } catch (error) {
            console.error("Error:", error);

        }
    }


    return (
        <>
            <CommonPage value="Reset Password" />
            <Box mt={12}>
                <Container>
                    <form onSubmit={handleResetPassword}>
                        <Typography>Reset Your Password</Typography>
                        <Input fullWidth sx={{ margin: "1rem 0" }}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            endDecorator={<span
                                style={{ cursor: "pointer" }}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                            </span>}
                        />
                        <Input fullWidth sx={{ margin: "1rem 0" }}
                            type={showPassword2 ? "text" : "password"}
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirm your password"
                            endDecorator={<span
                                style={{ cursor: "pointer" }}
                                onClick={togglePasswordVisibility2}
                            >
                                {showPassword2 ? <FaRegEye /> : <FaEyeSlash />}
                            </span>}
                        />
                        <Button fullWidth sx={{ background: "#26ae61", margin: "1rem 0" }} type='submit'>
                            Reset Password
                        </Button>
                    </form>
                </Container>
            </Box>
        </>
    );
}

export default ResetPassword;
