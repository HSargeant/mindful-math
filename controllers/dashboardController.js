const Task = require('../models/Task')
const User = require('../models/User')
const Note = require('../models/Note')

module.exports = {
    getUserData: async (req,res)=>{
        
        try{
            const taskItems = await Task.find({user:req.user.id,completed:false}).lean().sort({dueDate: 1})
            const notes = await Note.find({user:req.user.id}).lean().sort({createdAt: -1})
            res.render('dashboard.ejs', { item: taskItems, user: req.user, notes:notes})

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
            res.redirect('/dashboard')
            console.log('updated')
        }catch(err){
            console.log(err)
        }
    },
    addTask: async (req,res)=>{
        try{
            await Task.create({
                name: req.body.taskItem,
                user: req.user.id,
                dueDate: req.body.dueDate
            })
            res.redirect('/dashboard')
            console.log('task added')
        }catch(err){
            console.log(err)
        }
    },
}