const reviewsModel = require('../models/reviews')


function getOne(req, res, next) {
  const { id, rId } = req.params
  reviewsModel.getOne(id, rId)
    .then(data => {
      if (data) return res.status(200).send(data)
    }).catch(next)
}

function getAll(req, res, next) {
  reviewsModel.getAll(req.params.id)
  .then(data => {
    if (data) return res.status(200).send(data)
  }).catch(next)
}

function create(req, res, next) {
  const {title, rating, comment} = req.body
  const {id} = req.params
  const uId = req.claim.id


  
  if (!title || !rating || !comment)
    return next({ status: 400, message: `All Fields Required` })

  reviewsModel.create(title, rating, comment, uId, id)
  .then(data => res.status(200).send(data))
  
  .catch(next)
}

function update(req, res, next) {
  const {title, rating, comment} = req.body
  const { id, rId} = req.params
  
  if (!title || !rating || !comment)
    return next({ status: 400, message: `Request Is Empty` })

  reviewsModel.update(title, rating, comment, id, rId)
    .then(data => res.status(200).send(data))
    
    .catch(next)
}

function remove(req, res, next) {
  const { id, rId } = req.params
  
  return reviewsModel.remove(id, rId)
  .then(data => res.status(200).send(data))
  
  .catch(next)
}

module.exports = { getOne, getAll, create, update, remove }