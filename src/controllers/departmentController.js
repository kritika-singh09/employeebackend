import Department from "../models/Department.js";

// Create Department
export const createDepartment = async (req, res) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Departments
export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) return res.status(404).json({ error: "Department not found" });
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Department
export const updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!department) return res.status(404).json({ error: "Department not found" });
    res.json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Department
export const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department) return res.status(404).json({ error: "Department not found" });
    res.json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};