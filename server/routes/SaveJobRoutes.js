import express from "express";
import SavedJobController from "../controllers/SaveJobController/SaveJobController.js";
const router = express.Router();

router.get("/:id", SavedJobController.GetSavedJobs);
router.post("/create", SavedJobController.AddSavedJobs);
router.post("/remove", SavedJobController.RemoveSavedJobs);
export default router;
