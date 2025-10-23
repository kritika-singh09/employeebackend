import Performance from "../models/Performance.js";

// Create Performance
export const createPerformance = async (req, res) => {
  try {
    const performance = new Performance(req.body);
    await performance.save();
    res.status(201).json(performance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Performance
export const getAllPerformance = async (req, res) => {
  try {
    const performance = await Performance.find().populate('employeeId reviewerId');
    res.json(performance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Performance by ID
export const getPerformanceById = async (req, res) => {
  try {
    const performance = await Performance.findById(req.params.id).populate('employeeId reviewerId');
    if (!performance) return res.status(404).json({ error: "Performance not found" });
    res.json(performance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Performance
export const updatePerformance = async (req, res) => {
  try {
    const performance = await Performance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!performance) return res.status(404).json({ error: "Performance not found" });
    res.json(performance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Performance
export const deletePerformance = async (req, res) => {
  try {
    const performance = await Performance.findByIdAndDelete(req.params.id);
    if (!performance) return res.status(404).json({ error: "Performance not found" });
    res.json({ message: "Performance deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};