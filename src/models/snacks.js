const db = require('../../db')


/////////////// GET ALL SNACKS ///////////////

function getAll() {
  return db('snacks')
}

/////////////// GET ONE SNACK ///////////////

function getOne(sId){
  return db('snacks')
  .where({id: sId})
  .first()
}

module.exports = { getAll, getOne }
