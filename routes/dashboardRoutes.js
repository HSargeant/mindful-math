const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// "/api/dashboard"
router.put('/updategrade',ensureAuth,dashboardController.updateGrade)
router.get('/',ensureAuth,dashboardController.getUserData)

module.exports = router