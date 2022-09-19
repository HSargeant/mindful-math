const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const indexRoutes = require('./routes/IndexRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const notesRoutes = require('./routes/notesRoutes')
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({mongoUrl: process.env.MONGO_URL})

}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());
  
app.use('/', indexRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/notes', notesRoutes)

 
app.listen(process.env.PORT, ()=>{
    console.log(`running on port ${process.env.PORT}`)
})    











// const PORT = process.env.PORT || 8000
// console.log(process.env.PORT)

// // const fetch = require('node-fetch');
// const MongoClient = require("mongodb").MongoClient

// let db
// const dbName = process.env.DBNAME
// const connectionString = process.env.MONGO_URL
// MongoClient.connect(connectionString,{ useUnifiedTopology: true })
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })

// app.set('view engine', 'ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.enable('trust proxy')

// app.get('/',async (req, res)=>{
    
//         const assignments= await db.collection('assignments').find().sort({date: 1}).toArray()
//         const notes = await db.collection('notes').find().toArray()
//         const grade = await db.collection('grade-level').find().toArray()
//         res.render('index.ejs', { assign: assignments,notes: notes,grade: grade})
        
//     // res.render('index.ejs')

// })

// app.post('/addTask', async (req, res) => {
//     req.body.todoItem=req.body.todoItem.trim()
//     if(!req.body.todoItem) {
//         res.redirect('/')
//     return}
 
//     const rep = await db.collection('assignments').insertOne({task: req.body.todoItem,date:req.body.dueDate, completed: false}) 
//     res.redirect('/')
// })