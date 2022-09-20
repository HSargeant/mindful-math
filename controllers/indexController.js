const Task = require('../models/Task')
const User = require('../models/User')
const Note = require('../models/Note')


module.exports = {
    getIndex: async (req,res)=>{
        console.log(req.user)
        if(!req.user){
            res.render('index.ejs')

        }else{
            const taskItems = await Task.find({user:req.user.id,completed:false}).lean().sort({dueDate: 1})
            const notes = await Note.find({user:req.user.id}).lean().sort({createdAt: -1})
            res.render('dashboard.ejs', { item: taskItems, user: req.user, notes:notes})
        }
    }
}