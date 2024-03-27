import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstname: Yup.string()
    .min(2)
    .max(20)
    .required("Please enter your first name")
    .matches(/^[a-zA-Z]+$/, "Only alphabetic characters allowed"),
  lastname: Yup.string()
    .min(2)
    .max(20)
    .required("Please enter your last name")
    .matches(/^[a-zA-Z]+$/, "Only alphabetic characters allowed"),
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username must be at most 20 characters")
    .matches(/^\S*$/, "Username must not contain spaces")
    .required("Please enter your username"),
  email: Yup.string().email().required(`Please enter your email`),
  password: Yup.string()
    .min(8)
    .max(20)
    .required("please enter password")
    .matches(
      /^.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?].*$/,
      "Need one special character"
    ),
  password_confirmation: Yup.string()
    .required(`please enter confirm password`)
    .oneOf([Yup.ref("password"), null], "Password must matched"),
});
