import Leave from "../models/Leave.js";

// Create Leave
export const createLeave = async (req, res) => {
  try {
    const leave = new Leave(req.body);
    await leave.save();
    res.status(201).json(leave);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Leaves
export const getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate('employeeId');
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Leave by ID
export const getLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id).populate('employeeId');
    if (!leave) return res.status(404).json({ error: "Leave not found" });
    res.json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Leave
export const updateLeave = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!leave) return res.status(404).json({ error: "Leave not found" });
    res.json(leave);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Leave
export const deleteLeave = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndDelete(req.params.id);
    if (!leave) return res.status(404).json({ error: "Leave not found" });
    res.json({ message: "Leave deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};