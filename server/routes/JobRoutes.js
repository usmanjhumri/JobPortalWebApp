import express from "express";
import JobController from "../controllers/Jobs/Controller.js";
const router = express.Router();

router.get("/", JobController.GetJobs);
router.post("/create", JobController.PostJobs);
router.post("/applyjob", JobController.ApplyJob);
router.delete("/delete/:id", JobController.DeleteJobs);
router.get("/getjobsapplications/:id", JobController.GetJobApplications);
router.get("/dashboard", JobController.GetDashboardData);
export default router;
