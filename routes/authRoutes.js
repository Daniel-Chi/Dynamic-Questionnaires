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
    app.get("/logout", (req, res) => {
        req.session.destroy(err => {
            if (err) {
                console.log(err);
            }
            res.end()
        });
    });
    app.get("/auth", (req, res) => {
        res.send({ _id: req.user })
    })
    app.get("/authError", (req, res) => {
        res.send({ errMessage: req.flash("auth"[0]) })
    })
};