const reviewsModel = require('../models/reviews')


function getOne(req, res, next) {
  reviewsModel.getOne(req.params.id)  
  if (!req.body) return next({ status: 404, messsage: 'Post Does Not Exist' })
    res.status(200).send(req.body)
}

const getAll = (req, res, next) => {
  console.log('howdy')
  model.getAll(req.params.id)
  .then(data => {
    if (data) return res.status(200).send(data)
    else throw next()
  }).catch(next)
}

function create(req, res, next) {
  const { title, content, rating, snack_id, user_id } = req.body
  if (!title || !content || !rating || !snack_id || !user_id)
    return next({ status: 400, messsage: 'All Fields Are Required' })
    return reviewsModel.create(title, content, rating, snack_id, user_id)
      .then(data => { res.status(200).send(data) })
        .catch(next)
}

function update(req, res, next) {
  const { id, title, content, rating, snack_id, user_id } = req.body
  if (!title || !content || !rating || !snack_id || !user_id)
    return reviewsModel.update(id, title, content, rating, snack_id, user_id)
      .then(data => { res.status(200).send(data) })
        .catch(next)
}

function remove(req, res, next) {
  const id = req.params.id
  return reviewsModel.remove(id)
    .then(data => { res.status(200).send(data) })
      .catch(next)
}

module.exports = { getOne, getAll, create, update, remove }