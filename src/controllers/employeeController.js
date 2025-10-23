import Employee from "../models/Employee.js";

// Create Employee
export const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('departmentId');
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('departmentId');
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Employee
export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Employee
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};