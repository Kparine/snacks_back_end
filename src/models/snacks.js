const db = require('../../db/knex')


/////////////// GET ALL SNACKS ///////////////

function getAll() {
  return db('snacks')
}

/////////////// GET ONE SNACK ///////////////

function getOne(sId){
  return db('snacks')
  .where({id: id})
  .first()
}

module.exports = { getAll, getOne }
