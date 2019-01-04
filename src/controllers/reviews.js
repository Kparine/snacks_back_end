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
  const { title, content, review, snack_id, user_id } = req.body
  if (!title || !content || !review || !snack_id || !user_id)
    return next({ status: 400, messsage: 'All Fields Are Required' })
    return reviewsModel.create(title, content, review, snack_id, user_id)
      .then(data => { res.status(200).send(data) })
        .catch(next)
}

function update(req, res, next) {
  const {title, review, comment} = req.body
  const {uid, id, rid} = req.params
  if (!req.body.title || !req.body.review || !req.body.comment)
    return next({ status: 400, message: `edit failed. request is empty` })

  model.edit(title, rating, comment, uid, id, rid)
    .then(data => res.status(200).send(data)).catch(next)
}

function remove(req, res, next) {
  const { uid, id, rid } = req.params
  return reviewsModel.remove(uid, id, rid)
    .then(data => { res.status(200).send(data) })
      .catch(next)
}

module.exports = { getOne, getAll, create, update, remove }