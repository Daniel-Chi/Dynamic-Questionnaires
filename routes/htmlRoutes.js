module.exports = app => {
    app.get("/index", (req, res) => {
        console.log(req.isAuthenticated())
        res.send(req.user)
    });
}