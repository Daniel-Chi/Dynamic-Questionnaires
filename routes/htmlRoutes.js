module.exports = app => {
    app.get("/index", (req, res) => {
        res.send({
            _id: req.user,
            isAuth: req.isAuthenticated()
        })
    });
}