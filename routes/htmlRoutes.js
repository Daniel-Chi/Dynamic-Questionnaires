module.exports = app => {
    app.get("/index", (req, res) => {
        console.log("get request made to /index")
        console.log(req.user)
        res.end()
    });
}