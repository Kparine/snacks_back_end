const express = require('express')
const router = express.Router()
const controllers = require('../controllers/users')

router.post('/', controllers.create)
router.get('/:uId', controllers.getUser)

module.exports = router