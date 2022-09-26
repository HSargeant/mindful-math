const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth,dashboardController.getUserData)
router.get('/notes', ensureAuth, dashboardController.getUserData)
router.put('/updategrade',ensureAuth,dashboardController.updateGrade)
router.post('/addtask',ensureAuth,dashboardController.addTask)
router.put('/:id',ensureAuth,dashboardController.markComplete)



module.exports = router