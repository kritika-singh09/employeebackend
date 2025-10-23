const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: String,
  location: String,
  description: String,
  requirements: String,
  status: { type: String, enum: ['open','closed'], default: 'open' },
  posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const ApplicantSchema = new mongoose.Schema({
  job_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  resume_path: String, // file storage URL
  skills: String,
  experience_years: Number,
  status: { type: String, enum: ['applied','shortlisted','interviewed','selected','rejected'], default: 'applied' },
  applied_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const InterviewSchema = new mongoose.Schema({
  applicant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
  interviewer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  interview_date: { type: Date, required: true },
  mode: { type: String, enum: ['online','offline'], default: 'offline' },
  location: String,
  status: { type: String, enum: ['scheduled','completed','cancelled'], default: 'scheduled' },
  feedback: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = {
  Job: mongoose.model('Job', JobSchema),
  Applicant: mongoose.model('Applicant', ApplicantSchema),
  Interview: mongoose.model('Interview', InterviewSchema)
};
