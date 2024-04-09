const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController.js')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// "/api/assignments"
// router.get('/', ensureAuth,dashboardController.getUserData)
router.get('/', ensureAuth, taskController.getAssignments)
router.post('/addtask',ensureAuth,taskController.addTask)
router.put('/:id',ensureAuth,taskController.markComplete)


module.exports = router