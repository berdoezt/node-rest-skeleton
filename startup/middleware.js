module.exports = (app, express, morgan, helmet, cors) => {
    // app logging
    app.use(morgan('dev'))

    // json
    app.use(express.json())

    // cors
    app.use(cors())

    // security headers
    app.use(helmet())
}