const express = require('express')
const router = express.Router()
const controllers = require('../controllers/snacks')


router.get('/', controllers.getAll)
router.get('/:sId', controllers.getOne)


module.exports = router