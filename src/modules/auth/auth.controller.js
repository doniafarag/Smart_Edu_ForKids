import {userModel} from '../../../database/models/user.model.js'
import  AppError  from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import sendEmail from '../../utils/email.js'
import cryptoRandomString from 'crypto-random-string'
import moment from 'moment/moment.js'
import { customAlphabet } from "nanoid";
import OAuth2Client from 'passport-google-oauth2'

const signUp = catchError(async (req,res,next)=>{
    // console.log(req.protocol);
    // console.log(req.headers.host);
    const {email,password,confirmPassword}=req.body;
    let isUser = await userModel.findOne({email})
    if(isUser) return next ( AppError.Error('account already exists' ,"failed", 409))
    if (password != confirmPassword) return next ( AppError.Error('password not equal confirmpassword',"failed" , 409))
    let token = jwt.sign({email},process.env.SECRET_KEY , {expiresIn : 60 * 20})
    let newConfirmEmailToken = jwt.sign({email},process.env.SECRET_KEY , {expiresIn : 60 * 60 * 24 * 30})
     const requestNewEmailLink =`${req.protocol}://${req.headers.host}/auth/newConfirmEmailToken/${newConfirmEmailToken}`
     const link =`${req.protocol}://${req.headers.host}/auth/confirmEmail/${token}`
    const html = `
    <html>

<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0;">
  <meta name="format-detection" content="telephone=no" />

  <style>
    /* Reset styles */
    body {
      margin: 0;
      padding: 0;
      min-width: 100%;
      width: 100% !important;
      height: 100% !important;
    }

    body,
    table,
    td,
    div,
    p,
    a {
      -webkit-font-smoothing: antialiased;
      text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      line-height: 100%;
    }

    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-collapse: collapse !important;
      border-spacing: 0;
    }

    img {
      border: 0;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    #outlook a {
      padding: 0;
    }

    .ReadMsgBody {
      width: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }

    @media all and (min-width: 560px) {
      body {
        margin-top: 30px;
      }
    }
    
    /* Rounded corners */
    @media all and (min-width: 560px) {
      .container {
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -khtml-border-radius: 8px;
      }
    }
    /* Links */
    a,
    a:hover {
      color: #127DB3;
    }

    .footer a,
    .footer a:hover {
      color: #999999;
    }
  </style>

  <!-- MESSAGE SUBJECT -->
  <title>Confirm email template</title>

</head>

<!-- BODY -->
<body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0;  padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
	background-color: #F0F0F0;
	color: #000000;" bgcolor="#F0F0F0" text="#000000">
  <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background">
    <tr>
      <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#F0F0F0">
        <table border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#FFFFFF" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
	max-width: 560px;" class="container">
          
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 25px;" class="line">
              <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
			padding-top: 25px; 
			color: #000000;
			font-family: sans-serif;" class="paragraph">
              Hi <span style= color:#3969d5>${req.body.name}</span> ,<br> In order to start using your new account, you need to confirm your email address.
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 25px;
			padding-bottom: 5px;" class="button">
              <a href=${link} target="_blank" style="text-decoration: none;">
                <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;">
                  <tr>
                    <td align="center" valign="middle" style="padding: 12px 24px; margin: 0; text-decoration: none; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;"
                        bgcolor="#3969d5"><a target="_blank" style="text-decoration: none;
					color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;" href=${link}>
						Verify Email Address
					</a>
                    </td>
                  </tr>
									 
                </table>
              </a>
            </td>
          </tr>
					 <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 25px;
			padding-bottom: 5px;" class="button">
              <a href=${requestNewEmailLink}" target="_blank" style="text-decoration: none;">
                <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;">
                  <tr>
                    <td align="center" valign="middle" style="padding: 12px 24px; margin: 0; text-decoration: none; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;"
                        bgcolor="#3969d5"><a target="_blank" style="text-decoration: none;
					color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;" href=${requestNewEmailLink}>
						Resend New Mail
					</a>
                    </td>
                  </tr>
									 
                </table>
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 25px;" class="line">
              <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
			padding-top: 20px;
			padding-bottom: 25px;
			color: #000000;
			font-family: sans-serif;" class="paragraph">
              If you did not sign up for this account you can ignore this email and the account will be deleted.
            </td>
          </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" align="center" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
	max-width: 560px;" class="wrapper">
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
			padding-top: 20px;
			padding-bottom: 20px;
			color: #999999;
			font-family: sans-serif;" class="footer">
              Check out our extensive FAQ for more information
              or contact us through ourContact Form. Our support
              team is available to help you 24 hours a day, seven days a week.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;


   if( !(await sendEmail({to:email , subject:"Confirmation Email" , html}))){
    return next ( AppError.Error('account Rejected' ,"failed", 400))
  }

  const user = await userModel.create(req.body)
  return res.status(201).json({message: 'success',user,token})
})

const confirmEmail = catchError(async (req,res,next)=>{
    const {token} = req.params;
    // console.log({token});
    const {email} = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.updateOne({email}, {confirmEmail: true})
    return user.matchedCount ? res.redirect('http://localhost:4200/#/login') 
    : res.send(`<a href="http://localhost:4200/#/signup">Ops looks like u donot have account yet follow me to signup now</a>`)
})


const newConfirmEmailToken = catchError(async (req,res,next)=>{
  const { token } = req.params;
//   console.log({token});
  const {email} = jwt.verify(token, process.env.SECRET_KEY);
//   console.log(decoded);
  const user = await userModel.findOne({email})
  if (!user) {
      return res.send(`<a href="http://localhost:4200/#/signup">Ops looks like u donot have account yet follow me to signup now</a>`)
  }
  if (user.confirmEmail){
      return  res.redirect('http://localhost:4200/#/login') 
  }

  let newToken = jwt.sign({email},process.env.SECRET_KEY , {expiresIn : 60 * 15})

  const link =`${req.protocol}://${req.headers.host}/api/v1/auth/confirmEmail/${newToken}`
  // const html = `<a href="${link}"> Confirm Email </a> `
  // ================================
  const html = `
  <html>

<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0;">
<meta name="format-detection" content="telephone=no" />

<style>
  /* Reset styles */
  body {
    margin: 0;
    padding: 0;
    min-width: 100%;
    width: 100% !important;
    height: 100% !important;
  }

  body,
  table,
  td,
  div,
  p,
  a {
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 100%;
  }

  table,
  td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    border-collapse: collapse !important;
    border-spacing: 0;
  }

  img {
    border: 0;
    line-height: 100%;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
  }

  #outlook a {
    padding: 0;
  }

  .ReadMsgBody {
    width: 100%;
  }

  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height: 100%;
  }

  @media all and (min-width: 560px) {
    body {
      margin-top: 30px;
    }
  }
  
  /* Rounded corners */
  @media all and (min-width: 560px) {
    .container {
      border-radius: 8px;
      -webkit-border-radius: 8px;
      -moz-border-radius: 8px;
      -khtml-border-radius: 8px;
    }
  }
  /* Links */
  a,
  a:hover {
    color: #127DB3;
  }

  .footer a,
  .footer a:hover {
    color: #999999;
  }
</style>

<!-- MESSAGE SUBJECT -->
<title>Confirm email template</title>

</head>

<!-- BODY -->
<body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0;  padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
background-color: #F0F0F0;
color: #000000;" bgcolor="#F0F0F0" text="#000000">
<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background">
  <tr>
    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#F0F0F0">
      <table border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#FFFFFF" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
max-width: 560px;" class="container">
        
        <tr>
          <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
    padding-top: 25px;" class="line">
            <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
          </td>
        </tr>
        <tr>
          <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
    padding-top: 25px; 
    color: #000000;
    font-family: sans-serif;" class="paragraph">
            Hi <span style= color:#3969d5>${uesr.name}</span> ,<br> In order to start using your new account, you need to confirm your email address.
          </td>
        </tr>
        <tr>
          <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
    padding-top: 25px;
    padding-bottom: 5px;" class="button">
            <a href=${link} target="_blank" style="text-decoration: none;">
              <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;">
                <tr>
                  <td align="center" valign="middle" style="padding: 12px 24px; margin: 0; text-decoration: none; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;"
                      bgcolor="#3969d5"><a target="_blank" style="text-decoration: none;
        color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;" href=${link}>
          Verify Email Address
        </a>
                  </td>
                </tr>
                 
              </table>
            </a>
          </td>
        </tr>								 
              </table>
            </a>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
    padding-top: 25px;" class="line">
            <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
          </td>
        </tr>
        <tr>
          <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
    padding-top: 20px;
    padding-bottom: 25px;
    color: #000000;
    font-family: sans-serif;" class="paragraph">
            If you did not sign up for this account you can ignore this email and the account will be deleted.
          </td>
        </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" align="center" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
max-width: 560px;" class="wrapper">
        <tr>
          <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #999999;
    font-family: sans-serif;" class="footer">
            Check out our extensive FAQ for more information
            or contact us through ourContact Form. Our support
            team is available to help you 24 hours a day, seven days a week.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>
  `;
  // ====================================
  await sendEmail({to: user.email , subject:"Confirm Email", html})
  return res.send(`<p> Check your inbox now</p>`)
  
  
})



const signIn = catchError(async (req,res,next)=>{
    const{ email , password}=req.body
    let user = await userModel.findOne({email})
    if(!user || !bcrypt.compareSync(password , user.password))
        return next ( AppError.Error('incorrect email or password' ,"failed", 409))
        let token = jwt.sign({email:user.email,name:user.name,id:user._id,role:user.role},process.env.SECRET_KEY)
        res.status(201).json({message: 'success',user,token})  

})


// const forgetPassword=catchError(async(req,res,next)=>{
//     const{email}=req.body
//     // console.log(email)
//     const user = await userModel.findOne({email})
//     if(!user){
//         return res.json({message:"user not exist"})
//     }
    
//     let newToken = jwt.sign({email:user.email,name:user.name,id:user._id,role:user.role},process.env.SECRET_KEY , {expiresIn : 60 * 5})
 
//     const link =`${req.protocol}://${req.headers.host}/api/v1/auth/resetPassword/${newToken}`
//     const html = `<a href="${link}"> resetPassword </a> `
//     await sendEmail({to: user.email , subject:"resetPassword", html})
//     return res.status(200).json({message:"done"})

// })


// const resetPassword=catchError(async(req,res,next)=>{
//     const { newToken } = req.params
//     // const{token}=req.body
//     const{password,confirmPassword}=req.body
//      // console.log(process.env.SECRET_KEY)
//      const decoded=jwt.verify(newToken,process.env.SECRET_KEY)
//     // const decode =jwt.verify(newToken,process.env.SECRET_KEY)
//     const user=await userModel.findOne({email:decoded.email})
//     if (!user) {
//         return res.json({message:"email not exist"})
//     }
//     if (password == confirmPassword){
//         // const hashpassword = bcrypt.hashSync(password, 8)
//         const newuser= await userModel.findOneAndUpdate({email:user.email},{password:password},{new:true})
//         return res.status(200).json({message:"done",newuser})
//     }
//     else{
//         return res.json({ message: "password not equal confirmPassword" })
//     }
   
// })


// =======================================================


 const forgetPassword = catchError(async (req, res, next) => {
    const { email } = req.body;
    const nanoId = customAlphabet("0123456789", 5);
    const user = await userModel.findOneAndUpdate({email},{forgetCode:nanoId()},{new:true});
    if (!user.confirmEmail)  return next( AppError.Error("Please confirm your email",'failed', 400));
    const html = `
    <html>
  
  <head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0;">
  <meta name="format-detection" content="telephone=no" />
  
  <style>
    /* Reset styles */
    body {
      margin: 0;
      padding: 0;
      min-width: 100%;
      width: 100% !important;
      height: 100% !important;
    }
  
    body,
    table,
    td,
    div,
    p,
    a {
      -webkit-font-smoothing: antialiased;
      text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      line-height: 100%;
    }
  
    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-collapse: collapse !important;
      border-spacing: 0;
    }
  
    img {
      border: 0;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
  
    #outlook a {
      padding: 0;
    }
  
    .ReadMsgBody {
      width: 100%;
    }
  
    .ExternalClass {
      width: 100%;
    }
  
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }
  
    @media all and (min-width: 560px) {
      body {
        margin-top: 30px;
      }
    }
    
    /* Rounded corners */
    @media all and (min-width: 560px) {
      .container {
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -khtml-border-radius: 8px;
      }
    }
    /* Links */
    a,
    a:hover {
      color: #127DB3;
    }
  
    .footer a,
    .footer a:hover {
      color: #999999;
    }
  </style>
  
  <!-- MESSAGE SUBJECT -->
  <title>Confirm email template</title>
  
  </head>
  
  <!-- BODY -->
  <body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0;  padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
  background-color: #F0F0F0;
  color: #000000;" bgcolor="#F0F0F0" text="#000000">
  <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background">
    <tr>
      <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#F0F0F0">
        <table border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#FFFFFF" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
  max-width: 560px;" class="container">
          
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
      padding-top: 25px;" class="line">
              <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
      padding-top: 25px; 
      color: #000000;
      font-family: sans-serif;" class="paragraph">
              Hi <span style= color:#3969d5>${
                user.name
              }</span> ,<br> In order to start using your new account, you need to confirm your email address.
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
      padding-top: 25px;
      padding-bottom: 5px;" class="button">
             
                <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;">
                  <tr>
                    <td align="center" valign="middle" style="padding: 12px 24px; margin: 0; text-decoration: none; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;"
                        bgcolor="#3969d5">
            ${user.forgetCode}
          </a>
                    </td>
                  </tr>
                   
                </table>
              </a>
            </td>
          </tr
                </table>
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
      padding-top: 25px;" class="line">
              <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
      padding-top: 20px;
      padding-bottom: 25px;
      color: #000000;
      font-family: sans-serif;" class="paragraph">
              If you did not sign up for this account you can ignore this email and the account will be deleted.
            </td>
          </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" align="center" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
  max-width: 560px;" class="wrapper">
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
      padding-top: 20px;
      padding-bottom: 20px;
      color: #999999;
      font-family: sans-serif;" class="footer">
              Check out our extensive FAQ for more information
              or contact us through ourContact Form. Our support
              team is available to help you 24 hours a day, seven days a week.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  </body>
  </html>
    `;
    // if (!(await sendEmail({ to: email, subject: "resetPassword", html })))  return next(new AppError("Email Rejected", 400));
   if(!(await sendEmail({ to: email ,subject: "resetPassword", html }))){
    next( AppError.Error("Account rejeted","failed", 401));
  }
  return res.status(200).json({ message: "code send to your gmail successifuly" })
   
  });
  
 const CheckCode = catchError(async (req, res, next) => {
    const { email, forgetCode } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return next( AppError.Error("Not Registers Account","failed", 404));
    }
    if (user.forgetCode != forgetCode ) {
      return next( AppError.Error("in-Valid Code","failed", 404));
    }
    return res.status(200).json({ message: "Success" });
  });
  
 const RestePassword = catchError(async (req, res, next) => {
    const { email, newpassword, confirmPassword } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return next( AppError.Error("Not Registers Account","failed", 404));
    }
    
    if (newpassword == confirmPassword) {
         user.password =newpassword 
         user.forgetCode=null
       await user.save();
      // console.log(user)
      return res.status(201).json({ message: "Password has been changed Successfully" });
    } else {
      return next( AppError.Error("password not equal confirmpassword","failed",404));
    }
  });
// ========================================================
const loginWithGmail=catchError(async (req,res,next)=>{
  const user = await userModel.findOne({
    email: req.body.email.toLowerCase()
  });
  if(user){
     if(user.provider !== 'google'){
        return next( AppError.Error(`"In-valid provider true provider is ${user.provider}"`,"faield",400))
     }
  const newToken = jwt.sign({ id: user._id, role: user.role },process.env.SECRET_KEY);
  return res.status(200).json({message: "user logged in successfully",user: user,token: newToken});
  }
  const customPassword =customAlphabet('123456789hhjgfdghyjuklkjuhygtfrdsdfgtyhlkjh',9)
  const newUser = new userModel({
    email: req.body.email,
    name: req.body.name,
    provider: "google",
    password: customPassword(),
  })
  await newUser.save();
  const newToken = jwt.sign({ id: newUser._id, role: newUser.role },process.SECRET_KEY);
  return res.status(200).json({message: "user logged in successfully",user: newUser,token: newToken});
});
//  const loginWithGmail= catchError(
//   async(req,res,next)=>{
//       const {idToken} = req.body
//       const client = new OAuth2Client(process.env.CLIENT_ID);
//       async function verify() {
//           const ticket = await client.verifyIdToken({
//               idToken,
//               audience: process.env.CLIENT_ID,
//           });
//           const payload = ticket.getPayload();
//           return payload
//       }
//       const {given_name, family_name, email_verified, picture, email} = await verify()
      
//       if(!email_verified) return next(new AppError('Email not verified with Google', 409 ) )
      
//       const user = await userModel.findOne({email,  provider: "Google"})
//       // LoginUser
//       if(user){
//           const token = jwt.sign({
//               name: user.name,
//               email: user.email,
//               id: user._id,
//               role: user.role},
//               process.env.SECRET_KEY)

//           return res.status(200).json({message:" Success", token})    
//       }
//       // SignupUser
//       const SignupUser = await userModel.create({
//           name: given_name,
//           email,
//           image: picture,
//           isVerified: email_verified,
//           password: bcrypt.hashSync(nanoid(6), +process.env.SALT_ROUND),
//           provider: "Google"
//       })
//       const token = jwt.sign({
//           name: SignupUser.name,
//           email: SignupUser.email,
//           id: SignupUser._id,
//           role: SignupUser.role},
//           process.env.SECRET_KEY)

//       return res.status(201).json({message: "Success", token})
//   }
// )
//========================================================
const protectedRouter =catchError(async (req,res,next)=>{
    let token = req.headers.token
    if (!token) return next( AppError.Error("error in token or error not provided","failed" , 401))

    let decoded =jwt.verify(token,process.env.SECRET_KEY)

    let user = await userModel.findById(decoded.id)
    if (!user) return next( AppError.Error("user not found" , 401))
    
    if(user.passwordChangedAt){
        let changePasswordDate = parseInt(user.passwordChangedAt.getTime()/1000)
        if(changePasswordDate > decoded.iat ) return next  ( AppError.Error ('invalid token',"failed",401))
    }
    req.user=user
    next()

})

const allowedTo=(...roles)=>{

   return catchError(async (req,res,next)=>{
    if(!roles.includes(req.user.role))
      return next( AppError.Error('You are not authorized to access this route . you are' + req.user.role,401))
      next()

   })
}



export{
    signUp,
    confirmEmail,
    newConfirmEmailToken,
    signIn,
    forgetPassword,
    CheckCode,
    RestePassword,
    protectedRouter,
    allowedTo,
    loginWithGmail
}


