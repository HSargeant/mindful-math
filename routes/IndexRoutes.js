const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const indexController = require('../controllers/indexController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const passport = require('passport')

router.get('/', indexController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/auth/google',passport.authenticate('google',{scope: ['profile','email']}))
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/'}),(req, res)=>{
    console.log("redir")
    res.redirect('/dashboard')
})


module.exports = router