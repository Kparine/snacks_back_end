const db = require('../../db')



/////////////// GET ALL REVIEWS ///////////////

function getAll(id) {
  return db('reviews')
  .where({ snack_id: id })
}

/////////////// GET ONE REVIEW ////////////////

function getOne(id, rId) {
  return db('reviews')
  .where({ snack_id: id, id: rId })
  .first()
}
/////////////// CREATE REVIEW ////////////////

function create(){

}

/////////////// UPDATE REVIEW ////////////////

function update(){

}

/////////////// REMOVE REVIEW ////////////////

function remove(){
  return db('reviews')
  .del()
  .where('id', id)
  .returning('*')
}


module.exports = {getAll, getOne, create, update, remove}