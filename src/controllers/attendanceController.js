import Attendance from "../models/Attendance.js";

// Create Attendance
export const createAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Attendance
export const getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate('employeeId');
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Attendance by ID
export const getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id).populate('employeeId');
    if (!attendance) return res.status(404).json({ error: "Attendance not found" });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Attendance
export const updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!attendance) return res.status(404).json({ error: "Attendance not found" });
    res.json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Attendance
export const deleteAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndDelete(req.params.id);
    if (!attendance) return res.status(404).json({ error: "Attendance not found" });
    res.json({ message: "Attendance deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};