const userModel = require('../models/users')


function create(req, res, next){
  if(!req.body.username){
    return next({status: 400, message: 'Bad Username'})
  }
  if(!req.body.password){
    return next({status: 400, message: 'Bad Username'})
  }
  userModel.create(req.body.username, req.body.password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

module.exports = { create }