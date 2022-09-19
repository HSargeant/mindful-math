const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  googleId: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  image: {
    type: String,
  },
  gradeLevel:{
    type: String
  },
},{ timestamps: true })

// Password hash middleware.
 
 UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})


// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}


module.exports = mongoose.model('User', UserSchema)



// let userSchema = mongoose.Schema({
//   email: { type: String, unique: true },
//   name: { type: String },
//   password: { type: String },
//   roles: [String],
//   confirmation_code: String,
//   confirmed: { type: Boolean, default: false },
//   facebook: {
//       id: String,
//       token: String,
//       email: String,
//       name: String
//   },
//   google: {
//       id: String,
//       token: String,
//       email: String,
//       name: String
//   }
// },




// const userSchema = new mongoose.Schema({
//   email: { type: String, unique: true },
//   password: String,
//   passwordResetToken: String,
//   passwordResetExpires: Date,
//   // emailVerificationToken: String,
//   // emailVerified: Boolean,
  
//   google: String,
//   github: String,
//   instagram: String,
//   linkedin: String,
//   steam: String,
//   twitch: String,
//   quickbooks: String,
//   tokens: Array,

//   profile: {
//     name: String,
//     gender: String,
//     location: String,
//     website: String,
//     picture: String
//   }
// }