const Task = require('../models/Task')
const User = require('../models/User')
const Note = require('../models/Note')
const Cards = require('../models/Flashcard')

module.exports = {
    updateGrade: async (req,res)=>{
        try{
            await User.findOneAndUpdate({_id: req.user.id},{
                gradeLevel: req.body.gradeLevel,                        
            }, {
                new: true,
                runValidators: true
            })
            res.json({updated:true});
            console.log('updated')
        }catch(err){
            console.log(err)
        }
    },
    getQuote: async (req,res)=>{
        try{
            const response = await fetch('https://zenquotes.io/api/quotes')
            const quote= await response.json()
            let index = Math.floor(Math.random()*quote.length)
            res.json(quote[index])
        }catch(err){
            console.log(err)
        }
    },
}