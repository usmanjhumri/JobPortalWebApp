/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { ErrorText } from "../Helper/ErrorText";
import { useDispatch, useSelector } from "react-redux";
import CommonPage from "../commonPage/CommonPage";
import Logo from '../../assets/Logo1.png'
import { SignUpUser } from "../../RTK/API/api";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const signupSelector = useSelector((state) => state.userRegister?.data)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data, ' data');
            const result = await dispatch(SignUpUser(data))
            console.log(result)
        } catch (error) {
            console.log(error, ' someting is wrong');
        }

        console.log(signupSelector, 'slice data')
    }

    return (
        <>
            <CommonPage value="SingUp" />

            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <Box component="img" src={Logo} style={{
                            width: "100%"
                        }} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        id="signUp"
                        component="form"
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstname"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    error={errors.firstname}
                                    {...register("firstname", {
                                        required: true,
                                        pattern: /^[A-Za-z]{1,}$/,
                                    })}
                                />
                                {errors.firstName && (
                                    <>
                                        {errors.firstName.type === "pattern"
                                            ? ErrorText("Minimum Length 3 characters!")
                                            : ErrorText("First Name is Required!")}
                                    </>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastname"
                                    autoComplete="family-name"
                                    error={errors.lastname}
                                    {...register("lastname", {
                                        required: true,
                                        pattern: /^[A-Za-z]{1,}$/,
                                    })}
                                />
                                {errors.lastName && (
                                    <>
                                        {errors.lastName.type === "pattern"
                                            ? ErrorText("Minimum Length 3 characters!")
                                            : ErrorText("Last Name is Required!")}
                                    </>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    error={errors.email}
                                    {...register("email", {
                                        required: true,
                                        pattern:
                                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                />
                                {errors.email && (
                                    <>
                                        {errors.email.type === "pattern"
                                            ? ErrorText("Enter a valid email address!")
                                            : ErrorText("Email Address is Required!")}
                                    </>
                                )}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="phone"
                                    label="Phone-Number"
                                    type="phoneNumber"
                                    id="password"
                                    autoComplete="new-password"
                                    error={errors.phone}
                                    {...register("phone", {
                                        required: true,
                                        pattern:
                                            /([0-9\s-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
                                    })}
                                />
                                {errors.email && (
                                    <>
                                        {errors.email.type === "pattern"
                                            ? ErrorText("Enter a valid phone number!")
                                            : ErrorText("Phone Number is Required!")}
                                    </>
                                )}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
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
                                <TextField
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
                                            if (watch('password') != val) {
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
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            SignUp
                        </Button>

                        <Grid container justifyContent="space-between">
                            <Grid item md={12}>
                                <Box>
                                    <Link to="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default SignUp;
