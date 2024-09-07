import {mail} from "../mailing/mail.js"
import JobModel from "../models/job.model.js"
import ApplicantModel from "../models/applicants.model.js"

function generateUniqueApplicantId() {
    // Generate a random number and append a timestamp to ensure uniqueness
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

export default class JobsController{
    
    // PAGE RENDER ----------------------------------------------------------------------------------------
    getLanding(req,res){
        res.render('index',{userEmail:req.session.userEmail,name:req.session.userName})
    }
    getJobs(req,res){
        let jobs = JobModel.get()
        res.render('jobs',{jobs:jobs,userEmail:req.session.userEmail,name:req.session.userName})
    }
    getJobsDetails(req,res){
        const id = req.params.id;
        const find = JobModel.getById(id);
        res.render('job-details',{find:find,userEmail:req.session.userEmail,name:req.session.userName})
    }
    get404(req,res, next){
        res.render('404');
    }

    // APPLICANTS ----------------------------------------------------------------------------------------
    getApplicants(req,res, next){
        // Retrieve all applicants
        const allApplicants = ApplicantModel.getAll();

        // Group applicants by job ID
        const applicantsGroupedByJobId = {};
        allApplicants.forEach(applicant => {
            if (!applicantsGroupedByJobId[applicant.jobId]) {
                applicantsGroupedByJobId[applicant.jobId] = [];
            }
            applicantsGroupedByJobId[applicant.jobId].push(applicant);
        });

        // Render the view with grouped applicants
        res.render("applicants", { applicants: applicantsGroupedByJobId, userEmail: req.session.userEmail, name: req.session.userName });
        
    }
    postApplicants(req, res, next) {
        res.clearCookie('lastVisit');
        const { name, email, contact } = req.body;
        mail(email);
        const applicantId = generateUniqueApplicantId(); // Assuming you have a function to generate a unique applicant ID
        // JobModel.updateapplicants(id);
        if (!req.file || !req.file.filename) {
            return res.status(400).send("Resume is required");
        }
        const jobId = req.params.jobId;
        const resume = `/resume/${req.file.filename}`; 
        
        // Add the new applicant to the applicants using ApplicantModel        
        ApplicantModel.add(jobId, applicantId, name, email, contact, resume);
        // console.log("Applicant added:", name, email); // Add this line
        res.send("Applicant added successfully!");
        res.redirect("/jobs");
    }
    // Method to retrieve a specific applicant by ID for a job listing
    getApplicantById(req, res, next) {
        const jobId = req.params.jobId;
        const jobApplicants = ApplicantModel.getByJobId(jobId);
        res.render("applicants", { applicants: jobApplicants, userEmail: req.session.userEmail, name: req.session.userName });
    }
}