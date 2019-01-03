const express = require('express')
const router = express.Router({mergeParams: true})
const controllers = require('../controllers/reviews')
const authController = require('../controllers/auth')

//////// GENERAL ROUTES //////// 

router.get('/reviews', controllers.getAll)
router.get('/reviews/:rId', controllers.getOne)

//////// AUTHORIZED ROUTES //////// 

router.post('/', authController.isAuthenticated, authController.getAuthStatus, controllers.create)
router.put('/reviews/:rId', authController.isAuthenticated, authController.isSelf, controllers.update )
router.delete('/reviews/:rId', authController.isAuthenticated,  authController.isSelf, controllers.remove)

module.exports = router