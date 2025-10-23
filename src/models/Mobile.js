const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  role: { type: String, enum: ['employee','manager','admin'], default: 'employee' },
  department: String,
  created_at: { type: Date, default: Date.now }
});

const NotificationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  title: String,
  message: String,
  type: { type: String, enum: ['task','leave','meeting','payroll','announcement'], default: 'task' },
  priority: { type: String, enum: ['high','medium','low'], default: 'medium' },
  status: { type: String, enum: ['unread','read'], default: 'unread' },
  created_at: { type: Date, default: Date.now },
  read_at: Date
});

const AttendanceSchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  type: { type: String, enum: ['in','out'], required: true },
  method: { type: String, enum: ['geolocation','qr'], default: 'geolocation' },
  latitude: Number,
  longitude: Number,
  qr_code_scanned: String,
  timestamp: { type: Date, default: Date.now }
});

const LeaveRequestSchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  leave_type: { type: String, enum: ['casual','sick','paid','unpaid'], required: true },
  start_date: Date,
  end_date: Date,
  reason: String,
  status: { type: String, enum: ['pending','approved','rejected'], default: 'pending' },
  approved_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  approval_timestamp: Date,
  created_at: { type: Date, default: Date.now }
});

module.exports = {
  Employee: mongoose.model('Employee', EmployeeSchema),
  Notification: mongoose.model('Notification', NotificationSchema),
  Attendance: mongoose.model('Attendance', AttendanceSchema),
  LeaveRequest: mongoose.model('LeaveRequest', LeaveRequestSchema)
};
