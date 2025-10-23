// models/Performance.js
import mongoose from "mongoose";

const performanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // usually a manager or HR
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  feedback: {
    type: String,
  },
  reviewPeriod: {
    type: String, // e.g. "Q1 2025", "Annual 2025"
  },
  appraisalDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending",
  },
});

export default mongoose.model("Performance", performanceSchema);
