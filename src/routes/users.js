const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users')

router.post('/', controllers.create)

module.exports = router