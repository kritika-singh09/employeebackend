import express from "express";
import { 
  createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee,
  createNotification, getAllNotifications, getNotificationById, updateNotification, deleteNotification,
  createAttendance, getAllAttendance, getAttendanceById, updateAttendance, deleteAttendance,
  createLeaveRequest, getAllLeaveRequests, getLeaveRequestById, updateLeaveRequest, deleteLeaveRequest
} from "../controllers/mobileController.js";

const router = express.Router();

// Employee routes
router.post("/employees", createEmployee);
router.get("/employees", getAllEmployees);
router.get("/employees/:id", getEmployeeById);
router.put("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

// Notification routes
router.post("/notifications", createNotification);
router.get("/notifications", getAllNotifications);
router.get("/notifications/:id", getNotificationById);
router.put("/notifications/:id", updateNotification);
router.delete("/notifications/:id", deleteNotification);

// Attendance routes
router.post("/attendance", createAttendance);
router.get("/attendance", getAllAttendance);
router.get("/attendance/:id", getAttendanceById);
router.put("/attendance/:id", updateAttendance);
router.delete("/attendance/:id", deleteAttendance);

// Leave Request routes
router.post("/leave-requests", createLeaveRequest);
router.get("/leave-requests", getAllLeaveRequests);
router.get("/leave-requests/:id", getLeaveRequestById);
router.put("/leave-requests/:id", updateLeaveRequest);
router.delete("/leave-requests/:id", deleteLeaveRequest);

export default router;