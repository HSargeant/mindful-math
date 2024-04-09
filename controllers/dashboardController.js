const Task = require('../models/Task')
const User = require('../models/User')
const Note = require('../models/Note')
const Cards = require('../models/Flashcard')

module.exports = {
    updateGrade: async (req, res) => {
        try {
            await User.findOneAndUpdate({ _id: req.user.id }, {
                gradeLevel: req.body.gradeLevel,
            }, {
                new: true,
                runValidators: true
            })
            res.json({ updated: true });
            console.log('updated')
        } catch (err) {
            console.log(err)
        }
    },
    getQuote: async (req, res) => {
        try {
            const response = await fetch('https://zenquotes.io/api/quotes') // find a quote source
            const quote = await response.json()
            let index = Math.floor(Math.random() * quote.length)
            res.json(quote[index])
        } catch (err) {
            console.log(err)
        }
    },
    getDashTasks: async (req, res) => {
        try {
            const items = await Task.find({ user: req.user.id, completed: false }).lean().sort({ dueDate: 1 }).limit(5)
            res.json({ items: items })
        } catch (error) {
            console.error(error)
            res.json({ error })
        }
    },
    getDashCards: async (req, res) => {
        try {
            const cards = await Cards.find({ user: req.user.id }).lean().sort({ createdAt: -1 }).limit(8)
            res.json({ cards: cards })
        } catch (error) {
            console.error(error)
            res.json({ error })
        }
    },
    getDashNotes: async (req, res) => {
        try {
            const notes = await Note.find({ user: req.user.id }).lean().sort({ createdAt: -1 }).limit(5)
            res.json({ notes: notes })
        } catch (error) {
            console.error(error)
            res.json({ error })
        }
    }
}