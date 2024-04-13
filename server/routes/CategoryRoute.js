import express from "express";
import CatController from "../controllers/Categories/Controller.js";
const router = express.Router();
router.get("/", CatController.getdata);
router.post("/add", CatController.postCategory);
router.delete("/delete/:id", CatController.deleteCategory);
export default router;
