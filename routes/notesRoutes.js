const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const notesController = require('../controllers/notesController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth,notesController.getNotes)
router.get('/view/:id', ensureAuth, notesController.viewNote)
router.get('/edit/:id', ensureAuth, notesController.editNote)
router.put('/update', ensureAuth, notesController.updateNote)

router.get('/new', ensureAuth, notesController.newNote)
router.post('/createnote', ensureAuth, notesController.createNote)
router.delete('/deletenote',ensureAuth, notesController.deleteNote)


module.exports = router