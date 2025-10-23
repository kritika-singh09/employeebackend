const { Job, Applicant, Interview } = require('../models/Recruitment.js');

// Job Controllers
export const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('posted_by');
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('posted_by');
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Applicant Controllers
export const createApplicant = async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).json(applicant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find().populate('job_id');
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getApplicantById = async (req, res) => {
  try {
    const applicant = await Applicant.findById(req.params.id).populate('job_id');
    if (!applicant) return res.status(404).json({ error: "Applicant not found" });
    res.json(applicant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateApplicant = async (req, res) => {
  try {
    const applicant = await Applicant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!applicant) return res.status(404).json({ error: "Applicant not found" });
    res.json(applicant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteApplicant = async (req, res) => {
  try {
    const applicant = await Applicant.findByIdAndDelete(req.params.id);
    if (!applicant) return res.status(404).json({ error: "Applicant not found" });
    res.json({ message: "Applicant deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Interview Controllers
export const createInterview = async (req, res) => {
  try {
    const interview = new Interview(req.body);
    await interview.save();
    res.status(201).json(interview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find().populate('applicant_id interviewer_id');
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id).populate('applicant_id interviewer_id');
    if (!interview) return res.status(404).json({ error: "Interview not found" });
    res.json(interview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInterview = async (req, res) => {
  try {
    const interview = await Interview.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!interview) return res.status(404).json({ error: "Interview not found" });
    res.json(interview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteInterview = async (req, res) => {
  try {
    const interview = await Interview.findByIdAndDelete(req.params.id);
    if (!interview) return res.status(404).json({ error: "Interview not found" });
    res.json({ message: "Interview deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};