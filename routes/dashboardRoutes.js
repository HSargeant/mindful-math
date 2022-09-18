const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', dashboardController.getUserData)
router.get('/notes', ensureAuth, dashboardController.getUserData)
router.put('/updateGrade',ensureAuth,dashboardController.updateGrade)


module.exports = router