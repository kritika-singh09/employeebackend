import express from "express";
import { createLeave, getAllLeaves, getLeaveById, updateLeave, deleteLeave } from "../controllers/leaveController.js";

const router = express.Router();

router.post("/", createLeave);
router.get("/", getAllLeaves);
router.get("/:id", getLeaveById);
router.put("/:id", updateLeave);
router.delete("/:id", deleteLeave);

export default router;