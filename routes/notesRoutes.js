const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const notesController = require('../controllers/notesController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth,notesController.getNotes)
router.get('/edit/:id', ensureAuth, notesController.editNote)
router.put('/update/:id', ensureAuth, notesController.updateNote)

router.get('/new', ensureAuth, notesController.newNote)
router.post('/createnote', upload.single("file"), notesController.createNote)
router.delete('/delete/:id',ensureAuth, notesController.deleteNote)


module.exports = router