module.exports = (config, mongoose) => {
    var server = config.MONGO_SERVER
    var port = config.MONGO_PORT
    var db = config.MONGO_DB

    mongoose.connect('mongodb://' + server + ':' + port + '/' + db, {
        keepAlive: config.MONGO_KEEP_ALIVE,
        socketTimeoutMS: config.MONGO_SOCKET_TIMEOUT
    })
        .then(() => {
            console.log("Connected to db on %s:%s", server, port)
        })
        .catch(err => {
            console.log(err)
        })
}