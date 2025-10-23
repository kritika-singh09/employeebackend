import express from "express";
import { 
  createJob, getAllJobs, getJobById, updateJob, deleteJob,
  createApplicant, getAllApplicants, getApplicantById, updateApplicant, deleteApplicant,
  createInterview, getAllInterviews, getInterviewById, updateInterview, deleteInterview
} from "../controllers/recruitmentController.js";

const router = express.Router();

// Job routes
router.post("/jobs", createJob);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getJobById);
router.put("/jobs/:id", updateJob);
router.delete("/jobs/:id", deleteJob);

// Applicant routes
router.post("/applicants", createApplicant);
router.get("/applicants", getAllApplicants);
router.get("/applicants/:id", getApplicantById);
router.put("/applicants/:id", updateApplicant);
router.delete("/applicants/:id", deleteApplicant);

// Interview routes
router.post("/interviews", createInterview);
router.get("/interviews", getAllInterviews);
router.get("/interviews/:id", getInterviewById);
router.put("/interviews/:id", updateInterview);
router.delete("/interviews/:id", deleteInterview);

export default router;