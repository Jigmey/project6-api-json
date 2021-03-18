let express = require('express')
let router = require('./router')

let app = express()

app.use(router)
app.use(express.json())

module.exports = app;