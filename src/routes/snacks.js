const express = require('express')
const router = express.Router()
const controllers = require('../controllers/snacks')


router.get('/', controllers.getAll)
router.get('/:id', controllers.getOne)


module.exports = router