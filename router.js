let express = require('express')
let ff14Router = require('./ff14/router')

let router = new express.Router()
router.use('/ff14', ff14Router)
console.log("working I think...")

module.exports = router
