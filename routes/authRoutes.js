module.exports = (app, passport) => {
    //POST routes for login and signup
    app.post("/login", passport.authenticate("local-login", {
        successRedirect: "/auth",
        failureRedirect: "/authError",
        failureFlash: true
    }));
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/auth",
        failureRedirect: "/authError",
        failureFlash: true
    }));
    //Auth route to check for authentication at various stages
    app.get("/auth", (req, res) => {
        res.send({ _id: req.user })
    });
    //Failure route to flash error messages
    app.get("/authError", (req, res) => {
        res.send({ errMessage: req.flash("auth")[0] })
    });
    app.get("/logout", (req, res) => {
        req.session.destroy(err => {
            if (err) { console.log(err); }
            res.end()
        });
    });
};