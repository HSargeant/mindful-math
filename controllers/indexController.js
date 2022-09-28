const Task = require('../models/Task')
const User = require('../models/User')
const Note = require('../models/Note')
const Cards = require('../models/Flashcard')
const fetch = require('node-fetch');



module.exports = {
    getIndex: async (req,res)=>{
        if(!req.user){
            res.render('index.ejs')

        }else{
            try{
                const taskItems = await Task.find({user:req.user.id,completed:false}).lean().sort({dueDate: 1})
                const notes = await Note.find({user:req.user.id}).lean().sort({createdAt: -1})
                const cards = await Cards.find({user:req.user.id}).lean().sort({createdAt: -1})
                const response = await fetch('https://zenquotes.io/api/quotes')
                const data= await response.json()
    
                res.render('dashboard.ejs', { taskItems: taskItems, user: req.user, notes:notes,data:data,cards:cards})
    
            }catch(err){
                console.log(err)
            }
        }
    }
}