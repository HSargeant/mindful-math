const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const passport = require('passport')

router.get('/api/user',authController.getUser)
router.post('/login', authController.postLogin)
router.post('/signup', authController.postSignup)
router.get('/auth/google',passport.authenticate('google',{scope: ['profile','email']}))
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/'}),(req, res)=>{
    console.log("redir")
    res.redirect('/dashboard')
})

module.exports = router