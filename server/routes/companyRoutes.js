import express from 'express'
import {
  changejobApplicationStatus,
  changeVisibility,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  postJob,
  loginCompany,
  registerCompany,
} from "../controllers/companyController.js";
import upload from '../config/multer.js';
import { protectCompany } from '../middlewares/authMiddleware.js';

const router = express.Router()


// Register a company
router.post('/register',upload.single('image'), registerCompany)

// company login
router.post('/login', loginCompany)

//Get company Data
router.get('/company', protectCompany, getCompanyData)

//Post a Job
router.post("/post-job", protectCompany, postJob)

// Get Applicants data of  company
router.get('/applicants', protectCompany, getCompanyJobApplicants)

// Get company job list
router.get('/list-jobs', protectCompany, getCompanyPostedJobs)

// Change Application Status
router.post('/change-status', protectCompany, changejobApplicationStatus)

// Change Applications visibility
router.post("/change-visibility", protectCompany, changeVisibility)

export default router;