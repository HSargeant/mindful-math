const Task = require('../models/Task')
const User = require('../models/User')
const Note = require('../models/Note')
const Cards = require('../models/Flashcard')

module.exports = {
    getUserData: async (req,res)=>{
        try{
            const taskItems = await Task.find({user:req.user.id,completed:false}).lean().sort({dueDate: 1}).limit(5)
            const notes = await Note.find({user:req.user.id}).lean().sort({createdAt: -1}).limit(5)
            const cards = await Cards.find({user:req.user.id}).lean().sort({createdAt: -1}).limit(7)
            const response = await fetch('https://zenquotes.io/api/quotes')
            const data= await response.json()
            res.render('dashboard.ejs', { taskItems: taskItems, user: req.user, notes:notes,data:data,cards:cards})

        }catch(err){
            console.log(err)
        }
    },
    getAssignments: async (req,res)=>{
        try{
            const taskItems = await Task.find({user:req.user.id,completed:false}).lean().sort({dueDate: 1})
            res.render('assignments.ejs', { items: taskItems,user:req.user})
        }catch(err){
            console.log(err)
        }
    },
    updateGrade: async (req,res)=>{
        try{
            await User.findOneAndUpdate({_id: req.user.id},{
                gradeLevel: req.body.gradeLevel,                        
            }, {
                new: true,
                runValidators: true
            })
            res.redirect('back');
            console.log('updated')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req,res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.params.id},{
                completed: true       
            })
            res.redirect("back")
            console.log('deleted')
        }catch(err){
            console.log(err)
        }
    },
    addTask: async (req,res)=>{

        try{
            await Task.create({
                name: req.body.taskItem,
                user: req.user.id,
                dueDate: req.body.dueDate +" 12:59:59"
            })
            res.redirect('back')
            console.log('task added')
        }catch(err){
            console.log(err)
        }
    },
}