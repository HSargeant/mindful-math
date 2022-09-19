const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  content:{
    type: String,
    required: true,
  },
  image:{
    type: String,
  },
  cloudinaryId:{
    type: String
  }
},{ timestamps: true })

module.exports = mongoose.model('Note', NoteSchema)