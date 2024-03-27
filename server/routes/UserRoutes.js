import express from "express";
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlerwares/auth-middleware.js";
const router = express.Router();

router.use("/userlogged", checkUserAuth);
router.get("/userlogged", UserController.userLoggedData);

router.post("/register", UserController.userRigerstration);
router.post("/login", UserController.userLoggedIn);
router.post("/mail-sent", UserController.forgotPassword);
router.post("/resetpassword/:id/:token", UserController.userPasswordReset);
export default router;
