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
import { useDispatch } from "react-redux";
import CommonPage from "../commonPage/CommonPage";
import Logo from '../../assets/Logo1.png'
import { SignUpUser } from "../../RTK/API/api";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
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

    const onSubmit = (data) => {
        console.log(data, ' data');
        const singupuser = dispatch(SignUpUser(data));
        console.log(singupuser, ' signgsd');
    }
    // reset();


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
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    error={errors.firstName}
                                    {...register("firstName", {
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
                                    name="lastName"
                                    autoComplete="family-name"
                                    error={errors.lastName}
                                    {...register("lastName", {
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
                                    name="phoneNumber"
                                    label="Phone-Number"
                                    type="phoneNumber"
                                    id="password"
                                    autoComplete="new-password"
                                    error={errors.phoneNumber}
                                    {...register("phoneNumber", {
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
                            variant="button"
                            fullWidth
                            sx={{
                                mt: 3,
                                mb: 2,
                                px: 10,
                                py: 2,
                                color: "#FFFFFF",
                                clipPath:
                                    "polygon(21% 0, 94% 0, 100% 20%, 79% 100%, 6% 100%, 0 80%)",
                                background:
                                    " radial-gradient(241.67% 3206.67% at -4.58% -26.67%, #AD00FF 8.51%, #0029FF 90%)",
                                cursor: "pointer",
                            }}
                        >
                            Sign Up
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
