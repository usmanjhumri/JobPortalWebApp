import express from "express";
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlerwares/auth-middleware.js";
import upload from "../middlerwares/upload-middleware.js";
import ContactUsController from "../controllers/ContactUs/ContactUsController.js";
const router = express.Router();

// Private Route
router.use("/userlogged", checkUserAuth);
router.get("/userlogged", UserController.userLoggedData);
router.use("/applied", checkUserAuth);
router.use("/applied", upload.single([{ name: "assets", maxCount: 1 }]));
router.post("/applied", UserController.appliedForJob);
router.get("/userapplieddata", UserController.getuserAppliedData);

// Public Route

router.post("/register", UserController.userRigerstration);
router.post("/login", UserController.userLoggedIn);
router.post("/send-reset-password-email", UserController.forgotPassword);
router.post("/resetpassword/:id/:token", UserController.userPasswordReset);
router.post("/contact-us", ContactUsController);

export default router;
