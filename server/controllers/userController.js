import UserModel from "../model/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import transporter from "../config/emailConfig.js";
import CandidateProfile from "../model/CandidateProfile.js";
class UserController {
  //Rigestration code
  static userRigerstration = async (req, res) => {
    const { firstname, lastname, email, phone, password, confirm_password } =
      req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.send({ status: "failed", message: "Email already exists" });
    } else {
      if (
        firstname &&
        lastname &&
        email &&
        phone &&
        password &&
        confirm_password
      ) {
        if (password === confirm_password) {
          try {
            const saltPassword = await bcrypt.genSalt(12);
            const hashPassword = await bcrypt.hash(password, saltPassword);
            const userRigester = new UserModel({
              name: firstname,
              lname: lastname,
              email,
              phone,
              password: hashPassword,
            });
            await userRigester.save();
            const saved_user = await UserModel.findOne({ email: email });
            const token = await jwt.sign(
              { userID: saved_user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "1d" }
            );
            res.send({
              status: "success",
              message: "User Register Successfull",
              Token: token,
            });
          } catch (error) {
            console.log(error);
            res.send({ status: "failed", message: "Unable to Register" });
          }
        } else {
          res.send({
            status: "failed",
            message: "password and confirm password dosn't match",
          });
        }
      } else {
        res.send({ status: "failed", message: "All Feilds are Required" });
      }
    }
  };

  //loggin code
  static userLoggedIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        if (user !== null) {
          const isMatchPassword = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatchPassword) {
            const token = jwt.sign(
              { userID: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "1d" }
            );
            res.send({
              status: "success",
              message: "User LoggedIn Successfully",
              Token: token,
            });
          } else {
            res.send({ status: "failed", message: "Email or password wrong" });
          }
        } else {
          res.send({ status: "failed", message: "User not Registered" });
        }
      } else {
        res.send({ status: "failed", message: "All Feilds are Required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Unable to Login" });
    }
  };

  static forgotPassword = async (req, res) => {
    const { email } = req.body;
    console.log(req.body);
    if (email) {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userID: user._id }, secret, {
          expiresIn: "15m",
        });
        const link = `http://localhost:3000/user/reset/${user._id}/${token}`;
        console.log(link);
        // // Send Email
        // let info = await transporter.sendMail({
        //   from: process.env.EMAIL_FROM,
        //   to: user.email,
        //   subject: "GeekShop - Password Reset Link",
        //   html: `<a href=${link}>Click Here</a> to Reset Your Password`,
        // });
        // console.log(info);
        res.send({
          status: "success",
          message: "Password Reset Email Sent... Please Check Your Email",
        });
      } else {
        res.send({ status: "failed", message: "Email doesn't exists" });
      }
    } else {
      res.send({ status: "failed", message: "Email Field is Required" });
    }
  };

  static userPasswordReset = async (req, res) => {
    const { password, confirm_password } = req.body;
    const { id, token } = req.params;
    const user = await UserModel.findById(id);
    console.log(user, "user");
    const new_secret = user._id + process.env.JWT_SECRET_KEY;
    try {
      jwt.verify(token, new_secret);
      if (password && confirm_password) {
        if (password !== confirm_password) {
          res.send({
            status: "failed",
            message: "Password and Confirm Password doesn't match",
          });
        } else {
          const salt = await bcrypt.genSalt(10);
          const newHashPassword = await bcrypt.hash(password, salt);
          await UserModel.findByIdAndUpdate(user._id, {
            $set: { password: newHashPassword },
          });
          res.send({
            status: "success",
            message: "Password Reset Successfully",
          });
        }
      } else {
        res.send({ status: "failed", message: "All Fields are Required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Invalid Token" });
    }
  };

  static userLoggedData = async (req, res) => {
    res.send({ user: req.user });
  };

  //multer code
  static appliedForJob = async (req, res) => {
    try {
      const {
        fullname,
        email,
        dob,
        address,
        portfolio,
        phone,
        salary,
        hearaboutus,
        coverletter,
      } = req.body;
      const rdoc = req.files["assets"][0].filename;
      if (fullname && email && dob && address && phone && salary) {
        const userDoc = new CandidateProfile({
          name: fullname,
          email: email,
          dob: dob,
          address: address,
          portfolio: portfolio,
          rdoc: rdoc,
          phone: phone,
          salary: salary,
          hearabout: hearaboutus,
          coverletter: coverletter,
        });
        const userApplied = await userDoc.save();
        res
          .status(201)
          .send({
            status: "success",
            message: "Applied Successfully",
            userApplied: userApplied,
          });
      } else {
        res
          .status(200)
          .send({ status: "failed", message: "All Fields are Required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "something went wrong" });
    }
  };
}

export default UserController;
