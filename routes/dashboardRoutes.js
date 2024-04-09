const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// "/api/dashboard"
router.put('/updategrade',ensureAuth,dashboardController.updateGrade)
router.get('/tasks',ensureAuth,dashboardController.getDashTasks)
router.get('/cards',ensureAuth,dashboardController.getDashCards)
router.get('/notes',ensureAuth,dashboardController.getDashNotes)
router.get('/quote',ensureAuth,dashboardController.getQuote)

module.exports = router