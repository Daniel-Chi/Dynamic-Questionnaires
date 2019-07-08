const express = require("express");
// const passport = require("passport");
// const session = require("express-session");
// const flash = require("express-flash"); 
// const mongoose = require("mongoose");
// const routes = require("./routes");
// const User = require("./models/Users");
   const app = express();



// import express from "express";
// import passport from "passport";
// import session from "express-session";
// import flash from "express-flash";
// import mongoose from "mongoose";
// import routes from "./routes";
// import User from "./models/Users";

//let app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//passport, session, and flash middleware for authentication, persistent login, and error-handling
app.use(session({ secret: process.env.secret || "temporary secret" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
//Add auth route, passing in app and passport
require("./routes/authRoutes")(app, passport);

//import passport local strategies for login and signup and connect to Users in MongoDB
require("./config/passport/passport")(passport, User)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});