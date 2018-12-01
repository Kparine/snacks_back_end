const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')


//CRUD OPERATIONS

router.post('/', userController.create)
router.delete('/', userController)

module.exports = router