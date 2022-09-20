const mongoose = require('mongoose')

const FlashcardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  answer:{
    type: String,
    required: true,
  },
  image:{
    type: String,
  },
  cloudinaryId:{
    type: String
  },
  topic:{
    type: String,
  }
},{ timestamps: true })

module.exports = mongoose.model('Flashcard', FlashcardSchema)