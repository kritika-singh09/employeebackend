// models/Payroll.js
import mongoose from "mongoose";

const payrollSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  basicSalary: { type: Number, required: true },
  bonuses: { type: Number, default: 0 },
  deductions: { type: Number, default: 0 },
  month: { type: String, required: true }, // e.g., "October 2025"
  paymentStatus: { type: String, enum: ["Paid", "Pending"], default: "Pending" },
});

export default mongoose.model("Payroll", payrollSchema);
