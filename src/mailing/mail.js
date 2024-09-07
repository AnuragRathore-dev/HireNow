import nodemailer from 'nodemailer'
// Create a transporter object using SMTP
export const mail=(email)=>{
    const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
    user: 'vishakhapanwar.333@gmail.com',
    pass: 'tear mxxe gepz pmqr',
    },
    });
    const mailOptions = {
    from: 'vishakhapanwar.333@gmail.com',
    to: email,
    subject: 'Job Applied Confirmation E-Mail',
    text: 'This is a confirmation email sent from Job-Portal for your successful resume submission!',
    };
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    console.error('Error occurred:', error);
    } else {
    console.log('Email sent:', info.response);
    }
    });
}
// Define the email configuration
// Send the email
