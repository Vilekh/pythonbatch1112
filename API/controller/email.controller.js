import nodemailer from 'nodemailer';

export function sendMail(email,password)
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vilekhofficial@gmail.com',
    pass: 'rgwjaulxcvdeaoli'
  }
});

var mailOptions = {
  from: 'vilekhofficial@gmail.com',
  to: email,
  subject: 'Verification mail PMS',
  html: "<h1>Welcome To Project Management System</h1>You have successfully registers to our site , your login credentials are attached below<h3>Username : "+email+"</h3><h3>Password : "+password+"</h3><h2>Click on the link below to verfiy your account</h2>http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}