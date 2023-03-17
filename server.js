const express = require("express");
const app = express();
const path = require('path')
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const PORT = 8000
const cors = require("cors")
const connectDB = require("./config/database");
const indexRoutes = require('./routes/IndexRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const notesRoutes = require('./routes/notesRoutes')
const flashcardRoutes = require('./routes/flashcardRoutes')
const resourceRoutes = require('./routes/resourceRoutes')
const taskRoutes = require('./routes/taskRoutes.js')
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" })

// Passport config
require("./config/passport")(passport);

//Using EJS for views
// app.set("view engine", "ejs");

app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true
}));

//Static Folder
app.use(express.static("client/build"));

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
app.use('/api/dashboard', dashboardRoutes)
app.use('/api/tasks', taskRoutes)
app.use('/api/notes', notesRoutes)
app.use('/api/flashcards', flashcardRoutes)
app.use('/api/resources', resourceRoutes)

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


//cyclic mongo fix

//Connect To Database
connectDB().then(()=>{
  app.listen(process.env.PORT||PORT, ()=>{
    console.log(`running on port ${PORT}`)
  })
})