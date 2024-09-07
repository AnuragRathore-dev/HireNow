import JobModel from "./job.model.js";

export const applicants = [
    // new ApplicantModel(),
];

export default class ApplicantModel{

    constructor(_jobId, _applicantId, _name, _email, _contact, _resume){
        this.jobId = _jobId;
        this.id = _applicantId;
        this.name = _name;
        this.email = _email;
        this.contact = _contact;
        this.resume = _resume;
    }

    static getAll() {
        return applicants;
    }
    
    static add(jobId, applicantId, name, email, contact, resume){
        const job = JobModel.getById(jobId);
        if (!job) {
            console.error("Job not found");
            return; // Exit function if job doesn't exist
        }
        job.numberofapplicant += 1; // Increase numberofapplicant for the job

        let newApplicant = new ApplicantModel(
            jobId,
            applicantId,
            name, 
            email, 
            contact, 
            resume
        );
        console.log(newApplicant);
        applicants.push(newApplicant);
    }

    static getByJobId(jobId) {
        return applicants.filter(applicant => applicant.jobId === jobId);
    }
}