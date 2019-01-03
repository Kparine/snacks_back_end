const model = require('../models/snacks')

function getAll(req, res, next) {
  model.getAll()
    .then(data => { res.send(data) })
    .catch(next)
}

function getOne(req, res, next) {
  model.getOne(parseInt(req.params.sId))
    .then(data => {
      if (!data) throw ({ status: 404, message: 'Snack Not Found' })
      return res.send({ data })
    })
    .catch(next)
}


module.exports = { getAll, getOne }