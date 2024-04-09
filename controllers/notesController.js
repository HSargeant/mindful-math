const Notes = require('../models/Note')
const cloudinary = require("../middleware/cloudinary");

module.exports = {
    getNotes: async (req, res) => {
        try {
            const notes = await Notes.find({ user: req.user.id }).lean().sort({ createdAt: -1 })
            res.send({ notes: notes, user: req.user })
        } catch (err) {
            console.log(err);
        }
    },
    createNote: async (req, res) => {
        try {
            // Upload image to cloudinary
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                await Notes.create({
                    title: req.body.title,
                    image: result.secure_url,
                    cloudinaryId: result.public_id,
                    content: req.body.content,
                    user: req.user.id,
                    topic: req.body.topic
                });
            } else {
                await Notes.create({
                    title: req.body.title,
                    content: req.body.content,
                    topic: req.body.topic,
                    user: req.user.id,
                });
            }

            console.log("note has been added!");
            res.json({ succes: true })

        } catch (err) {
            console.log(err);
        }
    },
    editNote: async (req, res) => {

        const note = await Notes.findOne({
            _id: req.params.id
        }).lean()
        if (!note) {
            res.json("does not exist")
        }

        if (note.user != req.user.id) {
            res.json("does not exist")
        } else {
            res.json(note)
        }
    },
    updateNote: async (req, res) => {
        console.log(req.body)
        try {
            await Notes.findOneAndUpdate({ _id: req.params.id }, {
                title: req.body.title,
                content: req.body.content,
                topic: req.body.topic,
                user: req.user.id
            }, {
                new: true,
                runValidators: true
            })
            res.json('updated')
            console.log('updated')
        } catch (err) {
            console.log(err)
        }
    },

    deleteNote: async (req, res) => {
        try {
            let note = await Notes.findById({ _id: req.params.id });
            // Delete image from cloudinary
            if (note.image) {
                await cloudinary.uploader.destroy(note.cloudinaryId);
            }
            await Notes.deleteOne({ _id: req.params.id });
            console.log("Deleted Note");
            res.json("Deleted Note");
        } catch (err) {
            console.error(err)
            res.json("not found")
        }
    },
};