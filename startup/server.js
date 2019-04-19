module.exports = (config, app) => {
    var port = config.PORT
    app.listen(port, () => {
        console.log("Listening on port %d", port)
    })
}