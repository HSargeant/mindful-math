const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// "/api/dashboard"
router.put('/updategrade',ensureAuth,dashboardController.updateGrade)

module.exports = router