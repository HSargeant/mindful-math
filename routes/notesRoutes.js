const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const notesController = require('../controllers/notesController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// "/api/notes"
router.get('/', ensureAuth,notesController.getNotes)
router.get('/dashboard', ensureAuth,notesController.getNotesDash)
router.get('/edit/:id', ensureAuth, notesController.editNote)
router.put('/update/:id', ensureAuth, notesController.updateNote)
router.post('/createnote', upload.single("file"), notesController.createNote)
router.delete('/delete/:id',ensureAuth, notesController.deleteNote)

module.exports = router