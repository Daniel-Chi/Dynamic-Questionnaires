const express = require("express");
let passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api")
const authRouter = require("./routes/authRoutes");
const initializePassport = require("./config/passport/passport");
const User = require("./models/Users");
const path = require("path");
//const questionController = require("./models/questionController");

//initialize app and use PORT 3001 for Dev backend server
let app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//passport, session, and flash middleware for authentication, persistent login, and error-handling
app.use(session({
  secret: process.env.secret || "temporary secret",
  saveUninitialized: false,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }
//Add auth route, passing in app and passport
authRouter(app, passport);

app.use(apiRoutes);

//Route to use for data insertion form
app.get("/seed", (req,res)=>{
  res.sendFile(path.join(__dirname, "./form.html" ))
 });
//import passport local strategies for login and signup and connect to Users in MongoDB
initializePassport(passport, User)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});