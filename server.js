const express = require("express");
const app = express();
const mongoose = require("mongoose")
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const PORT = 8000
const cors = require("cors")
// const connectDB = require("./config/database");
const indexRoutes = require('./routes/IndexRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const notesRoutes = require('./routes/notesRoutes')
const flashcardRoutes = require('./routes/flashcardRoutes')
const resourceRoutes = require('./routes/resourceRoutes')
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" })

// Passport config
require("./config/passport")(passport);


//Using EJS for views
app.set("view engine", "ejs");

app.use(cors())

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: false }));
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
app.use('/flashcards', flashcardRoutes)
app.use('/resources', resourceRoutes)


//cyclic mongo fix
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewURLParser: true,
            useUnifiedTopology: true,
        })

        console.log("conneceted to database")
        
        app.listen(process.env.PORT||PORT, ()=>{
          console.log(`running on port ${PORT}`)
        })

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

//Connect To Database
connectDB();