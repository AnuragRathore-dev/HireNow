import nodemailer from 'nodemailer'

export const mail=(email)=>{
    const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
    user: '/yours',
    pass: 'tear mxxe gepz pmqr',
    },
    });
    const mailOptions = {
    from: '/your',
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

