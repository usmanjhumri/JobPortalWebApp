import express from "express";
import JobController from "../controllers/Jobs/Controller.js";
const router = express.Router();

router.get("/", JobController.GetJobs);
router.post("/create", JobController.PostJobs);
router.delete("/delete/:id", JobController.DeleteJobs);
export default router;
