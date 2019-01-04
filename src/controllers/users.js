const userModel = require('../models/users')

function getUser(req, res, next) {
  const id = req.params.uId
  return userModel.getUser(id)
  .then(result => {
    res.send(200).send({ data: result })
  })
  .catch(next)
} 

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

module.exports = { create, getUser }