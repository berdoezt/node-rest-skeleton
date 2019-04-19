// library
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

// startup
const config = require('./startup/config')(dotenv)
const app = require('./startup/app')(express)
const router = require('./startup/router')(express)
const server = require('./startup/server')(config, app)
const db = require('./startup/db')(config, mongoose)
const middleware = require('./startup/middleware')(app, express, morgan, helmet, cors)

// routes
require('./src/routes')(app, router)

// error handling
const error = require('./startup/error')(app)