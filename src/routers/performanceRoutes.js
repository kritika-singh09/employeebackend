import express from "express";
import { createPerformance, getAllPerformance, getPerformanceById, updatePerformance, deletePerformance } from "../controllers/performanceController.js";

const router = express.Router();

router.post("/", createPerformance);
router.get("/", getAllPerformance);
router.get("/:id", getPerformanceById);
router.put("/:id", updatePerformance);
router.delete("/:id", deletePerformance);

export default router;