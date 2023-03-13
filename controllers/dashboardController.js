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
    getUserData: async (req,res)=>{
        try{
            const taskItems = await Task.find({user:req.user.id,completed:false}).lean().sort({dueDate: 1}).limit(5)
            const notes = await Note.find({user:req.user.id}).lean().sort({createdAt: -1}).limit(5)
            const cards = await Cards.find({user:req.user.id}).lean().sort({createdAt: -1}).limit(7)
            const response = await fetch('https://zenquotes.io/api/quotes')
            const data= await response.json()
            // res.render('dashboard.ejs', { taskItems: taskItems, user: req.user, notes:notes,data:data,cards:cards})
            res.json({task:taskItems,notes:notes,flashcards:cards,quote:data})

        }catch(err){
            console.log(err)
        }
    },
}