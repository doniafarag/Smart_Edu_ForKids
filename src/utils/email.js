// import nodemailer from 'nodemailer'

//  const sendEmail = async ({ to ,cc,bcc,subject,text,html,attachments=[]}={})=>{
//     const transporter = nodemailer.createTransport({
//         service : "gmail",
//         // host:'smtp.gmail.com',
//         // port:"587",
//         // secure:true,
//         auth: {
//           // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//           user: process.env.EMAIL,
//           pass: process.env.EMAIL_PASSWORD,
//         },
//       });
    
//       const info = await transporter.sendMail({
//         from: `"Academy App" <${process.env.EMAIL}>`, // sender address
//         to, 
//         cc,
//         bcc,// list of receivers
//         subject, // Subject line
//         text, // plain text body
//         html, // html body
//         attachments
//       });
//       // console.log(info)
//       return info.rejected.length?false:true
// }

// export default sendEmail
import nodemailer from "nodemailer";

async function sendEmail({ to, cc, bcc, subject, html, attachments = [] } = {}) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Academy App" <${process.env.EMAIL}>`, // sender address
        to,
        cc,
        bcc,
        subject,
        html,
        attachments
    });

 
    return info.rejected.length ? false : true
}



export default sendEmail


// import nodemailer from "nodemailer";
// import xoauth2 from "xoauth2";

// const transporter = nodemailer.createTransport({
//           service : "gmail",
//           auth: {
//              xoauth2: xoauth2.createXOAuth2Generator({
//               user: 'kif.dev@gmail.com',
//               clientId:'',
//               clientSecret:"",
//               refreshToken:""
//              })
//           },
//         });

// const mailOptions ={
//   from: 'kifer <kif.dev@gmail.com>',
//   to :"mission.tawryd@gmail.com",
//   subject:'Nodemailer test',
//   text:"Hello World!!"

// }

// transporter.sendMail(mailOptions, function(err,res){
//   if(err){
//     console.log('Error');
//   }else{
//     console.log('Email sent');
//   }
// })
