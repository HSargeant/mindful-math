const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController.js')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// "/api/tasks"
// router.get('/', ensureAuth,dashboardController.getUserData)
router.get('/', ensureAuth, taskController.getAssignments)
router.get('/dashboard', ensureAuth, taskController.getAssignmentsDash)
router.post('/addtask',ensureAuth,taskController.addTask)
router.put('/:id',ensureAuth,taskController.markComplete)


module.exports = router