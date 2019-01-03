const express = require('express')
const router = express.Router({mergeParams: true})
const controllers = require('../controllers/reviews')
const authController = require('../controllers/auth')

//////// GENERAL ROUTES //////// 

router.get('/', controllers.getAll)
router.get('/:rId', controllers.getOne)

//////// AUTHORIZED ROUTES //////// 

router.post('/', authController.isAuthenticated, authController.getAuthStatus, controllers.create)
router.put('/:rId', authController.isAuthenticated, authController.isSelf, controllers.update )
router.delete('/:rId', authController.isAuthenticated,  authController.isSelf, controllers.remove)

module.exports = router