const passport =require("passport");
const User = require("../models/user.model");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { v4: uuidv4 } = require('uuid');


const GOOGLE_CLIENT_ID="691346851258-q22okgivepjlvqedifr95em55o4hd3b3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {

    const name=profile._json.name;
    const email=profile._json.email;
    const password=uuidv4()
    let user =await User.findOne({email:email}).lean().exec();
    if(!user){
        user=await User.create({
            name:name,
            email:email,
            password:password,
        })
    }
   

    //console.log(user)
    return cb(null, user);
  }
));

module.exports =passport;