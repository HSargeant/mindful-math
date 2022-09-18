const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  content:{
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  }
},{ timestamps: true })

module.exports = mongoose.model('Note', NoteSchema)