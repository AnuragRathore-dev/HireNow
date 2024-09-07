#Job Portal

## Introduction
Welcome to Job Portal, a platform designed to connect recruiters with job seekers. This README provides an overview of the project, its functionalities, setup instructions, and additional tasks.

![Screenshot](screenshot.png)

### Purpose
The purpose of Job Portal is to create a user-friendly website where recruiters can post job listings and manage applications, while job seekers can browse and apply for suitable roles.

## Features
- **User Authentication**: Recruiters can register, log in, and log out securely.
- **Job Management**: Recruiters can create, update, and delete job postings with ease.
- **Application Process**: Job seekers can apply for jobs and upload their resumes.
- **Email Confirmation**: Confirmation emails are sent to applicants upon applying for a job.
- **Session Management**: User sessions are managed using Express sessions.
- **Middleware**: Middleware functions handle authentication, file uploads, and email sending.
- **Error Handling**: Custom error pages are displayed for 404 errors.

## Setup Instructions
Follow these steps to set up the Easily Job Portal project:
1. **Clone the Repository**: Clone the project repository to your local machine.
2. **Install Dependencies**: Run `npm install` to install all necessary dependencies.
3. **Configure Environment**: Set up environment variables as required.
4. **Run the Server**: Execute `npm start` to start the Express server.
5. **Access the Website**: Open your web browser and navigate to the provided URL.

## Additional Tasks
To enhance the project further, consider implementing the following tasks:

1. **Job Search Functionality**: Allow users to filter jobs using a search input.
2. **Redirect Recruiters**: Redirect logged-in recruiters to the jobs page instead of login/register.
3. **Resource-Based Authorization**: Implement authorization so only job posters can edit/delete their postings.
4. **Display Last Visit**: Show the user's last visit date and time on the frontend.
5. **Confirmation Dialogs**: Add confirmation dialogs for critical operations to prevent accidents.
6. **Validation Middleware**: Implement a common validation middleware for consistent form validation.
7. **Pagination**: Paginate job listings and applicant lists for better performance.

## API Structure
The API endpoints for Easily Job Portal are structured as follows:

### Authentication Routes
- `POST /register`: Register a new recruiter account.
- `GET /`: Render the login page.
- `POST /login`: Log in as a recruiter.
- `POST /logout`: Log out the currently logged-in recruiter.

### Job Routes

#### Job Listings
- `GET /jobs`: Retrieve all job listings.
- `POST /jobs`: Create a new job listing.
- `GET /jobs/:id`: Retrieve a specific job listing by ID.
- `PUT /jobs/:id`: Update a specific job listing by ID.
- `DELETE /jobs/:id`: Delete a specific job listing by ID.

#### Applicants
- `GET /jobs/:id/applicants`: Retrieve all applicants for a specific job listing.
- `POST /jobs/:id/applicants`: Add a new applicant to a specific job listing.
- `GET /jobs/:id/applicants/:applicantId`: Retrieve a specific applicant by ID for a job listing.
- `PUT /jobs/:id/applicants/:applicantId`: Update a specific applicant by ID for a job listing.
- `DELETE /jobs/:id/applicants/:applicantId`: Delete a specific applicant by ID for a job listing.

#### Update and Delete Actions
- `GET /jobs/:id/update`: Render the update form for a specific job listing.
- `POST /jobs/:id/update`: Update a specific job listing by ID.
- `GET /jobs/:id/delete`: Delete a specific job listing by ID.

### Apply
- `POST /applicants/:jobId`: Apply to a specific job listing by ID, uploading a resume.

### Error Handling
- `GET /404`: Render the 404 error page.

## Conclusion
Job Portal provides a robust platform for both recruiters and job seekers, facilitating the job search and application process. With its user-friendly interface and comprehensive features, Job Portal aims to streamline the recruitment process for all stakeholders involved.
If you have any questions or feedback, feel free to reach out to me via email at panwarvishakha31@gmail.com or connect with me on LinkedIn www.linkedin.com/in/vishakha-panwar-web-developer. I'm open to collaborations, job opportunities, or just a friendly chat!