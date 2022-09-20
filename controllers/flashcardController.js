const Cards = require('../models/Flashcard')
const cloudinary = require("../middleware/cloudinary");

module.exports = {
    getCards: async (req, res) => {
        try {
            const cards = await Cards.find({user: req.user.id}).lean()
            
            res.render("flashcard.ejs", { cards: cards, user: req.user});
        } catch (err) {
            console.log(err);
        }
    },
    editCard: async (req, res) => {
        try {
            const card = await Cards.findById({_id: req.params.id}).lean()
            
            res.render("editFlashcard.ejs", { card: card, user: req.user});
        } catch (err) {
            console.log(err);
        }
    },
    viewCardsByTopic: async (req, res) => {
        try {
            const cards = await Cards.find({topic: req.params.id}).lean()
            
            res.render("flashcard.ejs", { cards: cards, user: req.user});
        } catch (err) {
            console.log(err);
        }
    },
    createCard: async (req, res) => {
        try {
            await Cards.create({
                question: req.body.question.trim(),
                answer: req.body.answer.trim(),
                user: req.user.id,
                topic: req.body.topic.trim()
            });
            console.log("card has been added!");
            res.redirect("/flashcards");
        } catch (err) {
            console.log(err);
        }
    },
    updateCard: async (req, res)=>{
        try{
          
            await Cards.findOneAndUpdate({_id: req.params.id},{
                question: req.body.question.trim(),
                answer: req.body.answer.trim(),
                user: req.user.id,
                topic: req.body.topic.trim()          
            }, {
                new: true,
                runValidators: true
            })
            res.redirect('/flashcards')
            console.log('updated')
        }catch(err){
            console.log(err)
        }
    },

    deleteCard: async (req, res) => {
        try {
            // Find post by id
            let note = await Cards.findById({ _id: req.params.id });
            // Delete image from cloudinary
            if(note.image){
                await cloudinary.uploader.destroy(note.cloudinaryId);
            }
            // Delete post from db
            await Cards.deleteOne({ _id: req.params.id });
            console.log("Deleted Note");
            res.redirect("/flashcards");
        } catch (err) {
            res.redirect("/flashcards");
        }
        },
};