import express from "express";
import ProfileController from "../controllers/ProfileController/ProfileController.js";
const router = express.Router();

router.get("/:id", ProfileController.GetProfile);
router.post("/create", ProfileController.UpdateProfile);
export default router;
