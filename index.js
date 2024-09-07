import express from 'express';
import path from 'path';
import session from 'express-session';
import ejsLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
//Controllers
import JobsController from './src/controllers/job.controller.js';
import UserController from './src/controllers/userController.js';
//Middlewares
import { uploadfiles } from './src/middlewares/file-upload.middleware.js';
import { uploadImage } from './src/middlewares/file-upload.middleware.js';
import { auth } from './src/middlewares/auth.middleware.js';
import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';

const app=express();
app.use(cookieParser());
app.use(setLastVisit);
app.use(
    session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    })
);    
// Setup view engine settings
app.set('view engine','ejs');
app.use(express.json());
app.use(ejsLayouts);
//Parse Form data
app.use(express.urlencoded({extended: true}));
// Path of our views
app.set("views", path.join(path.resolve(),"src",'views')); 
app.use(express.static('src/views'));
app.use(express.static("public"));

// Create an instance of Controller
const jobController = new JobsController();
const userController = new UserController();

//User
app.get("/signup", userController.getSignup);
app.get("/login", userController.getLogin);
app.post("/signup",userController.postRegister);
app.post("/login",userController.postLogin);
app.get("/logout",userController.logout);
app.get("/postjob", userController.addJob);
app.post("/jobs",auth,uploadImage.single('png'),userController.postaddJob);
app.get('/jobs/update/:id',auth,userController.getUpdateJob);
app.post('/jobs/update/',auth, uploadImage.single('png'),userController.postUpdateJob);
app.get("/jobs/delete/:id", userController.deleteJob);

//Job
app.get("/",jobController.getLanding);
app.get("/jobs",jobController.getJobs);
app.get("/jobs/:id",setLastVisit,jobController.getJobsDetails);
app.get('/applicants',auth, jobController.getApplicants);
app.get("/applicants/:jobId/:applicantId", jobController.getApplicantById);
app.post("/applicants/:jobId", uploadfiles.single('resume'), jobController.postApplicants);
app.get('/404', jobController.get404);
app.use(function(req, res, next) {
    res.status(404).render('404'); // Render the 404 view
});


app.listen(3300,()=>{
    console.log("server is listening at 3300");
});