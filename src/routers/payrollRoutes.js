import express from "express";
import { createPayroll, getAllPayroll, getPayrollById, updatePayroll, deletePayroll } from "../controllers/payrollController.js";

const router = express.Router();

router.post("/", createPayroll);
router.get("/", getAllPayroll);
router.get("/:id", getPayrollById);
router.put("/:id", updatePayroll);
router.delete("/:id", deletePayroll);

export default router;