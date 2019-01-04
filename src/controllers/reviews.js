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
  const {uId, id} = req.params
  
  if (!title && !rating && !comment)
    return next({ status: 400, message: `new entries must have all fields` })

  model.create(title, rating, comment, uId, id)
  .then(data => res.status(200).send(data)).catch(next)
}

function update(req, res, next) {
  const {title, rating, comment} = req.body
  const {uId, id, rId} = req.params
  if (!title || !rating || !comment)
    return next({ status: 400, message: `edit failed. request is empty` })

  model.edit(title, rating, comment, uId, id, rId)
    .then(data => res.status(200).send(data)).catch(next)
}

function remove(req, res, next) {
  const { uId, id, rId } = req.params
  return reviewsModel.remove(uId, id, rId)
  .then(data => res.status(200).send(data)).catch(next)
}

module.exports = { getOne, getAll, create, update, remove }