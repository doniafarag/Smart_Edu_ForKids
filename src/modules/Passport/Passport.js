import googleOauth from 'passport-google-oauth2'
// import { Strategy as FacebookStrategy } from 'passport-facebook';
import passport from "passport";
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

const GoogleStrategy = googleOauth.Strategy;

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})


passport.use(
  new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.callbackURL,
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
); 


// passport.use(
//   new FacebookStrategy({
//       clientID: process.env.appID,
//       clientSecret: process.env.clientSecretFace,
//       callbackURL: process.env.callbackURLFace,
//     },
//     (request, accessToken, refreshToken, profile, done) => {
//       done(null, profile);
//     }
//   )
// ); 