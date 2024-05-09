import { Box, Container, Grid, TextField, Typography } from "@mui/material"
import { userResetPassword } from "../../RTK/API/api"
import CommonPage from "../../components/commonPage/CommonPage"
import { FaEyeSlash, FaRegEye } from "react-icons/fa"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ErrorText } from "../../components/Helper/ErrorText"
import { Button } from "@mui/joy"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

const ResetPassword = () => {
    const { id, token } = useParams();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false);

    const dispatch = useDispatch()

    const handleResetPassword = async (data) => {
        console.log('working.....')
        const res = await dispatch(userResetPassword({ ...data, id, token }))
        console.log(res)
    }
    const togglePasswordVisibility = () => {
        console.log('working')
        setShowPassword(!showPassword)
    }
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };
    return (
        <>

            <CommonPage value="Reset Password" />
            <Box>
                <Container>
                    <Typography sx={{
                        textAlign: "center",
                        marginTop: "1rem",
                        fontSize: "2rem"
                    }}>
                        Rest Password
                    </Typography>
                    <Box mt={4} component='form' onSubmit={handleSubmit(handleResetPassword)}>
                        <Grid item xs={12}>
                            <TextField sx={{ marginBottom: "1rem" }}
                                size="small"
                                required
                                fullWidth
                                id="email"
                                label="Password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="password"
                                error={errors.password}
                                {...register("password", { required: true, minLength: 8 })}
                                InputProps={{
                                    endAdornment: (
                                        <span
                                            style={{ cursor: "pointer" }}
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                                        </span>
                                    ),
                                }}
                            />
                            {errors.password && (
                                <>
                                    {errors.password.type === "password"
                                        ? ErrorText("Minimum Length 8 Characters")
                                        : ErrorText("Password is Requird")}
                                </>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField sx={{ margin: "1rem 0" }}
                                size="small"
                                required
                                fullWidth
                                id="email"
                                type={showPassword2 ? "text" : "password"}
                                label="Confirm-Password"
                                name="confirm_password"
                                autoComplete="password"
                                error={errors.confirm_password}
                                {...register("confirm_password", {
                                    required: true,
                                    validate: (val) => {
                                        if (watch("password") != val) {
                                            return "Passwords and confirm password not matched";
                                        }
                                    },
                                })}
                                InputProps={{
                                    endAdornment: (
                                        <span
                                            style={{ cursor: "pointer" }}
                                            onClick={togglePasswordVisibility2}
                                        >
                                            {showPassword2 ? <FaRegEye /> : <FaEyeSlash />}
                                        </span>
                                    ),
                                }}
                            />
                        </Grid>
                        <Button sx={{ margin: "1rem 0" }} type="submit" fullWidth>
                            Reset Password
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default ResetPassword