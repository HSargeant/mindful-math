const Task = require('../models/Task')
const User = require('../models/User')

module.exports = {

    getUserData: async (req,res)=>{
        try{
            const taskItems = await Task.find({user:req.user.id})
            .populate('user')
            res.render('dashboard.ejs', { item: taskItems, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    updateGrade: async (req,res)=>{
        try{
            await User.findOneAndUpdate({_id: req.user._id},{
                gradeLevel: req.body.gradeLevel,
                         
            }, {
                new: true,
                runValidators: true
            })
            res.redirect('/reviews')
            console.log('updated')
        }catch(err){
            console.log(err)
        }
    }
}