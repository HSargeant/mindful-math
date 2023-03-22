const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const passport = require('passport')
require("dotenv").config({ path: "./config/.env" });

router.get('/api/user',authController.getUser)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.post('/signup', authController.postSignup)
router.get('/auth/google',passport.authenticate('google',{scope: ['profile','email']}))
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/login'}),(req, res)=>{
    console.log("redir")
        // res.redirect('http://localhost:3000/dashboard') //dev
        res.redirect('/dashboard') // prod

})

module.exports = router