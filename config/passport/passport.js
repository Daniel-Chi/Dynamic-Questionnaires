//package for generating hashed passwords
const bCrypt = require("bcrypt");
//using 'local' strategy with username and password, import as constructor
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport, User) => {
    //Passport 'local' strategy configuration for signup
    passport.use("local-signup", new LocalStrategy({
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
    }, (req, usernamePreTrim, passwordPreTrim, done) => {
        //trim username and password
        const username = usernamePreTrim.trim();
        const password = passwordPreTrim.trim();
        // if any fields are empty, set flash message
        if (username.length === 0) {
            return done(null, false, req.flash("auth", "Username is required."));
        }
        if (password.length === 0) {
            return done(null, false, req.flash("auth", "Password is required."));
        }
        //function to generate hash from password
        const generateHash = (password) => {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        //check for already existing user
        User.findOne({
            username: username
        }).then(user => {
            //if username is already taken, set flash message
            if (user) {
                return done(null, false, req.flash("auth", "That username is already taken."));
            } else {
                //if everything passes, generate hash and create user in database
                const passwordHash = generateHash(password);
                User.create({
                    username: username,
                    password: passwordHash
                }).then(newUser => {
                    //set flash message for other errors
                    if (!newUser) {
                        return done(null, false, req.flash("auth", "There was an error creating User."));
                    } else {
                        return done(null, newUser);
                    }
                }).catch(err => console.log("User create error: " + err));
            }
        }).catch(err => console.log("Error finding user (signup): " + err));
    }));

    //Passport 'local' strategy configuration for login
    passport.use("local-login", new LocalStrategy({
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
    }, (req, username, password, done) => {
        // if any fields are empty, set flash message
        if (username.trim().length === 0) {
            return done(null, false, req.flash("auth", "Username is required."));
        }
        if (password.trim().length === 0) {
            return done(null, false, req.flash("auth", "Password is required."));
        }
        //bCrypt checks input password hash against actual password hash, returns Boolean
        //do not use native JavaScript '===' comparison because of timing attack vulnerability
        const checkPasswordValid = (realPassword, inputPassword) => {
            return bCrypt.compareSync(inputPassword, realPassword);
        };
        //check database to make sure user exists
        User.findOne({
            username: username
        }).then(user => {
            //if username or password doesn't match, set flash message
            if (!user) {
                return done(null, false, req.flash("auth", "User does not exist."));
            }
            //get boolean for password matched or not
            if (!checkPasswordValid(user.password, password)) {
                return done(null, false, req.flash("auth", "Incorrect password."));
            }
            //if correct user & password, user gets logged in
            // const userData = user.get(); OLD SEQUELIZE
            return done(null, user);
            //catch errors
        }).catch(err => {
            console.log("Login Error: " + err);
            //set flash message for misc. errors
            return done(null, false, req.flash("auth", "There was an error logging in."));
        });
    }));

    //serialize user cookie. Stores {id: ...} in req.session.passport.user
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    //deserialize user cookie. Callback stores req.user object
    passport.deserializeUser((_id, done) => {
        User.findOne({ _id: _id }).then(user => {
            if (user) {
                done(null, user._id);
            } else {
                //send errors if any
                done(user.errors, null);
            }
        }).catch(err => console.log("Error finding user (deserialize)" + err));
    });
};