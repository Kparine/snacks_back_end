const express = require('express')
const router = express.Router()
const controllers = require('../controllers/snacks')


router.get('/', controllers.getAll)
router.get('/:sId', controllers.getOne)
router.use('/:rId', require('./reviews'))



module.exports = router