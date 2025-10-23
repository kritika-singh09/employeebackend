
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import employeeRoutes from "./src/routers/employeeRoutes.js";
import departmentRoutes from "./src/routers/departmentRoutes.js";
import attendanceRoutes from "./src/routers/attendanceRoutes.js";
import leaveRoutes from "./src/routers/leaveRoutes.js";
import performanceRoutes from "./src/routers/performanceRoutes.js";
import payrollRoutes from "./src/routers/payrollRoutes.js";
import taskRoutes from "./src/routers/taskRoutes.js";
import notificationRoutes from "./src/routers/notificationRoutes.js";
import userRoutes from "./src/routers/userRoutes.js";
import mobileRoutes from "./src/routers/mobileRoutes.js";
import recruitmentRoutes from "./src/routers/recruitmentRoutes.js";

dotenv.config();
connectDB();

const BASE_URL = "https://employeebackend-seven.vercel.app";

const app = express();

// CORS Configuration
app.use(cors({
  origin: [
    "https://employeefrontend-zeta.vercel.app",
    "https://employee-admin-ashy.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend connected with MongoDB 🚀");
});

// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/performance", performanceRoutes);
app.use("/api/payroll", payrollRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/mobile", mobileRoutes);
app.use("/api/recruitment", recruitmentRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
