import JobModel from "../models/job.model.js";
import UserModel from "../models/user.model.js";

export default class UserController {
    getSignup(req, res){
        res.render('signup');
    }
    getLogin(req, res) {
        res.render('login', { message: null }); 
    }
    postRegister(req, res) {
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);
        res.render('login', { message: null });
    }
    postLogin(req, res) {
        const { email, password } = req.body;
        const user = UserModel.isValid( email, password);
        if (!user) {
            return res.render('login', {
            message: 'User not found. Kindly register',
            });
        }
        req.session.userEmail = email;
        req.session.userName = user.name;
        res.render('index', {userEmail:req.session.userEmail,name:req.session.userName});
    }
    logout(req, res) {
        // on logout, destroy the session
        req.session.destroy((err) => {
        if (err) {
        console.log(err);
        } else {
        res.redirect('/');
        }
        });
    }

    // JOB -----------------------------------------------------------------------------------------------
    addJob(req,res){
        res.render("addnewjob",{userEmail:req.session.userEmail,name:req.session.userName});
    }
    postaddJob(req,res){
        // Check if file was uploaded successfully
        if (!req.file) {
            // Handle the case where no file was uploaded
            console.log("No file uploaded");
            // You can return an error response or render a specific error page
            return res.status(400).send("No file uploaded");
        }
        // File was uploaded successfully, proceed with adding the job
        const image = req.file.path; // Get the path of the uploaded image
        req.body.image = image; // Add image path to the request body

        // Now, you can save the job details including the image URL
        JobModel.addJob(req.body);

        // Redirect or render the appropriate view
        let jobs = JobModel.get();
        res.render('jobs', { jobs: jobs, userEmail: req.session.userEmail, name: req.session.userName });

    }
    getUpdateJob(req,res){
        const id=req.params.id
        const upadtejob=JobModel.getById(id)
        if(upadtejob){
            res.render('updateform',{job:upadtejob,userEmail:req.session.userEmail,name:req.session.userName})
        }
        else{
            res.render('jobs',{message:'Job not found'})
        }
    }
    postUpdateJob(req,res){
        if (req.file) {
            // File was uploaded successfully, proceed with updating the job
            const imagePath = "/images/" + req.file.filename; // Construct the correct image path
            req.body.image = imagePath; // Update image path in the request body
        }
        // Update the job details
        JobModel.update(req.body);
        let jobs=JobModel.get();
        res.render('jobs',{jobs:jobs,userEmail:req.session.userEmail,name:req.session.userName});
    }
    deleteJob(req, res) {
        const id = req.params.id;
        JobModel.delete(id);
        let jobs = JobModel.get();
        res.render('jobs',{jobs:jobs,userEmail:req.session.userEmail,name:req.session.userName})
    }                
}