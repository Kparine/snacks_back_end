const db = require('../../db/knex')



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

function create(id, {title, text, rating, user_id}){
  return db('reviews')
  .insert({title, text, rating, snack_id: id, user_id})
  .returning('*')
  .then(function([data]){
    return data
  })
}

/////////////// UPDATE REVIEW ////////////////

function update(id, rId, {title, content, rating}){
  return db('reviews')
  .update({title, content, rating})
  .where({snack_id: id, id: rId})
  .returning('*')
  .then(([data]) => {
    return data
  })
}

/////////////// REMOVE REVIEW ////////////////

function remove(id, rId){
  return db('reviews')
  .del()
  .where({snack_id: id, id: rId })
  .returning('*')
  .then(([data])=> {
    delete data.id
    return data
  })
}


module.exports = {getAll, getOne, create, update, remove}