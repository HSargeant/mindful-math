const Notes = require('../models/Note')
const cloudinary = require("../middleware/cloudinary");

module.exports = {
    getNotes: async (req, res) => {
        try {
            const notes = await Notes.find({user: req.user.id}).lean()
            
            res.render("allNotes.ejs", { notes: notes, user: req.user, });
        } catch (err) {
            console.log(err);
        }
    },
    newNote: async (req, res) => {  
        res.render("newNote.ejs", { user: req.user});
    },
    viewNote: async (req, res) => {
        try {
            const notes = await Notes.find({_id: req.params._id}).lean()
            res.render("note.ejs", { note: notes, user: req.user, });
        } catch (err) {
            console.log(err);
        }
    },
    createNote: async (req, res) => {
        try {
            // Upload image to cloudinary
            if(req.body.image){
                const result = await cloudinary.uploader.upload(req.file.path);

                await Notes.create({
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                content: req.body.caption,
                user: req.user.id,
                });
                console.log("note has been added!");
                res.redirect("/notes");
            }else{
                await Notes.create({
                    title: req.body.title,
                    content: req.body.caption,
                    user: req.user.id,
                    });
                    console.log("note has been added!");
                    res.redirect("/notes");

            }
            
    
        } catch (err) {
            console.log(err);
        }
    },
    editNote: async (req,res)=>{

        const note = await Notes.findOne({
            _id: req.params.id
        }).lean()   
        if(!note){
            res.redirect('/notes')
        }
    
        if(note.user != req.user.id){
            res.redirect('/notes')
        }else{      
            res.render('edit.ejs',{note: note,user:req.user.id,})
        }
    },
    updateNote: async (req, res)=>{
        try{
            if(req.body.image){
                // Upload image to cloudinary
                const result = await cloudinary.uploader.upload(req.file.path);
            }

            await Notes.findOneAndUpdate({_id: req.params.id},{
                title: req.body.title,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                content: req.body.caption,
                user: req.user.id,            
            }, {
                new: true,
                runValidators: true
            })
            res.redirect('/notes')
            console.log('updated')
        }catch(err){
            console.log(err)
        }
    },

    deleteNote: async (req, res) => {
        try {
            // Find post by id
            let note = await Notes.findById({ _id: req.params.id });
            // Delete image from cloudinary
            if(note.image){
                await cloudinary.uploader.destroy(post.cloudinaryId);
            }
            // Delete post from db
            await Post.remove({ _id: req.params.id });
            console.log("Deleted Note");
            res.redirect("/notes");
        } catch (err) {
            res.redirect("/notes");
        }
        },
};