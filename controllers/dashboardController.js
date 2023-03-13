const User = require('../models/User')
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
    }
}