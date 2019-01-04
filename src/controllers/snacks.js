const model = require('../models/snacks')

function getAll(req, res, next) {
  const limit = req.query.limit
  model.getAll(limit)
    .then(data => { res.send(data) })
    .catch(next)
}

function getOne(req, res, next) {
  model.getOne(parseInt(req.params.id))
    .then(data => {
      if (!data) throw ({ status: 404, message: 'Snack Not Found' })
      return res.send(data)
    })
    .catch(next)
}


module.exports = { getAll, getOne }