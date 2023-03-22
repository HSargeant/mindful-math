const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const flashcardController = require('../controllers/flashcardController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// "/api/flashcards"
router.get('/', ensureAuth,flashcardController.getCards)
router.get('/dashboard', ensureAuth,flashcardController.getCardsDash)
// router.get('/view/:topic', ensureAuth, flashcardController.viewCardsByTopic)
router.get('/edit/:id', ensureAuth, flashcardController.editCard)
router.put('/edit/:id', ensureAuth, flashcardController.updateCard)

router.post('/create', upload.single("file"), flashcardController.createCard)
router.delete('/:id',ensureAuth, flashcardController.deleteCard)


module.exports = router