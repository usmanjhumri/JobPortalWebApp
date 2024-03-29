import express from "express";
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlerwares/auth-middleware.js";
const router = express.Router();

// Private Route
router.use("/userlogged", checkUserAuth);
router.get("/userlogged", UserController.userLoggedData);
router.use("/applied", checkUserAuth);
router.post("/applied", UserController.appliedForJob);

// Public Route
router.post("/register", UserController.userRigerstration);
router.post("/login", UserController.userLoggedIn);
router.post("/mail-sent", UserController.forgotPassword);
router.post("/resetpassword/:id/:token", UserController.userPasswordReset);
export default router;
