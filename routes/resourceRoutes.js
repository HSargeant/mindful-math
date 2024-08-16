const express = require('express')
const router = express.Router()
const resourceController = require('../controllers/resourceController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// /api/resources
router.get('/', ensureAuth,resourceController.getResources)
router.post('/chat', ensureAuth,resourceController.chatReponse)

module.exports = router