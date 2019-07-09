module.exports = (app, passport) => {
    //POST routes for login and signup
    app.post("/login", (req, res, next) => {
        passport.authenticate("local-login", (err, user, info) => {
            if (err) return next(err);
            if (info) return res.send(info);
            req.logIn(user, err => {
                if (err) return next(err);
                return res.send(user);
            });
        })(req, res, next)
    });
    // successRedirect: "/index",
    // failureRedirect: "/login",
    // failureFlash: true
    // })
    app.post("/signup", (req, res, next) => {
        passport.authenticate("local-signup", (err, user, info) => {
            if (err) return next(err);
            if (info) return res.send(info);
            req.logIn(user, err => {
                if (err) return next(err);
                return res.send(user);
            });
        })(req, res, next)
    });
    app.get("/logout", (req, res) => {
        req.session.destroy(err => {
            if (!err) {
                res.redirect("/");
            } else {
                console.log(err);
                res.end()
            }
        });
    });
};