// models/Attendance.js
import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["Present", "Absent", "Leave"], default: "Present" },
  checkInTime: { type: String },
  checkOutTime: { type: String },
});

export default mongoose.model("Attendance", attendanceSchema);
