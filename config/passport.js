const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function (passport) {
  //local
  passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email.toLowerCase() })
      if(!user){
        return done(null, false, { msg: `Invalid email or password.` })
      }
      if (!user.password) {
        return done(null, false, { msg: 'Your account was registered using a sign-in provider. Edit profile to enable password login' })
      }

      user.comparePassword(password, (err, isMatch) => {
        if (err) { return done(err) }
        if (isMatch) {
          return done(null, user)
        }
        return done(null, false, { msg: 'Invalid email or password.' })
      })
      
    } catch (error) {
      return done(err)
    }


    // User.findOne({ email: email.toLowerCase() }, (err, user) => {
    //   if (err) { return done(err) }
    //   if (!user) {
    //     return done(null, false, { msg: `Email ${email} not found.` })
    //   }
    //   if (!user.password) {
    //     return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
    //   }
    //   user.comparePassword(password, (err, isMatch) => {
    //     if (err) { return done(err) }
    //     if (isMatch) {
    //       return done(null, user)
    //     }
    //     return done(null, false, { msg: 'Invalid email or password.' })
    //   })
    // })
  }))


  // google
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.NODE_ENV === "development" ? "http://localhost:8000/auth/google/callback" : "https://mindful-math.onrender.com/auth/google/callback"
  },
    async (accessToken, refreshToken, profile, done) => {

      const newUser = {
        googleId: profile.id,
        username: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
        email: profile.emails[0].value
      }
      try {
        let user = await User.findOne({ googleId: profile.id })

        if (user) {
          done(null, user)
        } else {
          user = await User.create(newUser)
          done(null, user)
        }
      } catch (err) {
        console.error(err)
      }
    }))

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  // passport.deserializeUser((id, done) => {
  //   User.findById(id, (err, user) => done(err, user))
  // })


  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
}