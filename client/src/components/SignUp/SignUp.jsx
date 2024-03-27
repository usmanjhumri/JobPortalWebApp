/* eslint-disable no-unused-vars */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../../assets/Logo1.png'
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useFormik } from "formik";
import { signupSchema } from './SingUpRegex';
import styles from './SignUpStyle';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    mobile_code: "",
    mobile: "",
    email: "",
    password: "",
    password_confirmation: "",
    country_code: "",
    country: "",
    order_number: "",
};

export default function SignUp() {
    const [vaildPhoneNumber, setValidPhoneNumber] = useState(false);
    const [mobile, setMobile] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };
    const handePhoneNumber = (newVal, info) => {
        const { countryCallingCode, countryCode } = info;
        const check = matchIsValidTel(newVal);
        setValidPhoneNumber(check);
        values.mobile_code = countryCallingCode;
        values.country_code = countryCode;
        values.mobile = newVal;
        setMobile(newVal);
    };
    const { errors, values, handleChange, handleSubmit, touched } =
        useFormik({
            initialValues: initialValues,
            validationSchema: signupSchema,

            onSubmit: async (values) => {
                const Order = localStorage.getItem("order_Number");
                values.order_number = Order ? Order : "";

                const encodedPassword = btoa(values.password);
                values.password = encodedPassword;
                const encodedConfirm = btoa(values.password_confirmation);
                values.password_confirmation = encodedConfirm;
                if (vaildPhoneNumber) {

                    Navigate("/login")
                }

            },
        });

    return (
        <>
            <Box sx={styles.SingUp} className="sinupSingin">
                <Container>
                    <Grid container>
                        <Box>
                            <Box sx={styles.containerBox}>
                                <Typography
                                    variant="h1"
                                    sx={styles.register}
                                >
                                    Register
                                </Typography>
                                <Box mt={1} sx={styles.signinsingup}>
                                    <Link to='/' style={styles.singupsigninhome}>Home</Link>
                                    <ArrowForwardIosIcon sx={styles.loginsinup} />
                                    <Typography sx={styles.loginsinup}>Register</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <Box component="img" src={Logo} style={{
                            width: "100%"
                        }} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>

                                <TextField
                                    id="firstname"
                                    name="firstname"
                                    value={values.firstname}
                                    required
                                    onChange={handleChange}
                                    fullWidth
                                    label="First Name"
                                />
                                {errors.firstname && touched.firstname ? (
                                    <Typography style={styles.errorsP}>{errors.firstname}</Typography>
                                ) : null}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="lastName"
                                    name="lastname"
                                    value={values.lastname}
                                    required
                                    onChange={handleChange}
                                    fullWidth
                                    label="Last Name"
                                />
                                {errors.lastname && touched.lastname ? (
                                    <Typography sx={styles.errorsP}>
                                        {errors.lastname}
                                    </Typography>
                                ) : null}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={values.email}

                                />
                                {errors.email && touched.email ? (
                                    <Typography sx={styles.errorsP}>
                                        {errors.email}
                                    </Typography>
                                ) : null}
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>

                                    <MuiTelInput
                                        required
                                        name="mobile"
                                        id="mobile"
                                        defaultCountry="PK"
                                        value={values.mobile}
                                        onChange={handePhoneNumber}
                                        sx={{ marginTop: "20px" }}
                                        forceCallingCode={true}
                                    />

                                    {touched.phoneNumber && errors.phoneNumber && (
                                        <Typography sx={{ color: "red" }}>{errors.phoneNumber}</Typography>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleChange}
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
                                {errors.password && touched.password ? (
                                    <Typography style={styles.errorsP}>
                                        {errors.password}
                                    </Typography>
                                ) : null}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Confirm Password"
                                    type={showPassword2 ? "text" : "password"}
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleChange}
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
                                {errors.password_confirmation &&
                                    touched.password_confirmation ? (
                                    <Typography sx={styles.errorsP}>
                                        {errors.password_confirmation}
                                    </Typography>
                                ) : null}
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}