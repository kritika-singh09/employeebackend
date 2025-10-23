// models/Employee.js
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  designation: { type: String }, // e.g., Manager, Developer
  department: { type: String },  // e.g., HR, IT, Sales
  salary: { type: Number },
  joiningDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  address: { type: String },
  profileImage: { type: String }, // Cloudinary or local URL
});

export default mongoose.model("Employee", employeeSchema);
