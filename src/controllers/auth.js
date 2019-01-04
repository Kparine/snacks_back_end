const authModel = require('../models/auth')
const jwt = require('jsonwebtoken')
const reviewModel = require('../models/reviews')



function login(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return next({ status: 400, message: 'Bad Request' })
  }
  authModel.login(req.body.username, req.body.password)
    .then(function (user) {
      const token = jwt.sign({ id: user.id }, process.env.SECRET)

      return res.status(200).send({ token })
    })
    .catch(next)
}

function getAuthStatus(req, res, next) {
  res.status(200).send({ id: req.claim.id })
}

function isAuthenticated(req, res, next) {

  if (!req.headers.authorization)

    return next({ status: 401, message: 'Authentication Failed' })

  const [scheme, token] = req.headers.authorization.split(' ')
  jwt.verify(token, process.env.SECRET, (err, payload) => {

    if (err) return next({ status: 401, message: 'Unauthorized' })
    req.claim = payload
    next()
  })
}
function isSelf(req, res, next) {
  if(parseInt(req.params.uId) !== req.claim.id){
    return next({status: 401, message: 'Not You'})
  }
  next()
}

function ownsReview(req, res, next){
  const reviewId = req.params.rId
  const snackId = req.params.id

  reviewModel.getOne(snackId, reviewId)
  .then(review => {
    if(review.user_id === req.claim.id) return next()
    else return next({status: 401, message: 'Not You'})
  })
}


module.exports = { login, getAuthStatus, isAuthenticated, isSelf, ownsReview }