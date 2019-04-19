module.exports = (app) => {
    // require controllers
    const error = require('./error')

    // add controller routes here

    app.use(error)
}