import Payroll from "../models/Payroll.js";

// Create Payroll
export const createPayroll = async (req, res) => {
  try {
    const payroll = new Payroll(req.body);
    await payroll.save();
    res.status(201).json(payroll);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Payroll
export const getAllPayroll = async (req, res) => {
  try {
    const payroll = await Payroll.find().populate('employeeId');
    res.json(payroll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Payroll by ID
export const getPayrollById = async (req, res) => {
  try {
    const payroll = await Payroll.findById(req.params.id).populate('employeeId');
    if (!payroll) return res.status(404).json({ error: "Payroll not found" });
    res.json(payroll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Payroll
export const updatePayroll = async (req, res) => {
  try {
    const payroll = await Payroll.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!payroll) return res.status(404).json({ error: "Payroll not found" });
    res.json(payroll);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Payroll
export const deletePayroll = async (req, res) => {
  try {
    const payroll = await Payroll.findByIdAndDelete(req.params.id);
    if (!payroll) return res.status(404).json({ error: "Payroll not found" });
    res.json({ message: "Payroll deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};