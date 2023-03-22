const Task = require('../models/Task')

module.exports = {
    getAssignments: async (req,res)=>{
        try{
            const taskItems = await Task.find({user:req.user.id,completed:false}).lean().sort({dueDate: 1})
            res.json(taskItems)
        }catch(err){
            console.log(err)
        }
    },
    getAssignmentsDash: async (req,res)=>{
        try{
            const taskItems = await Task.find({user:req.user.id,completed:false}).lean().sort({dueDate: 1}).limit(5)
            res.json(taskItems)
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req,res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.params.id},{
                completed: true       
            })
            res.send("completed")
            console.log('deleted')
        }catch(err){
            console.log(err)
        }
    },
    addTask: async (req,res)=>{
        try{
            const task = await Task.create({
                name: req.body.item,
                user: req.user.id,
                dueDate: req.body.dueDate
            })
            res.json(task)
            console.log('task added')
        }catch(err){
            console.log(err)
        }
    },
}