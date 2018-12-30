const express = require('express')
const router = express.Router({mergeParams: true})
const controllers = require('../controllers/reviews')
const authController = require('../controllers/auth')

//////// GENERAL ROUTES //////// 

router.get('/', controllers.getAll)
router.get('/', controllers.getOne)



//////// AUTHORIZED ROUTES //////// 

router.post('/reviews', )
router.put('/reviews', )
router.delete('/reviews', )

module.exports = router