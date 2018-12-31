const db = require('../../db/knex')



/////////////// GET ALL REVIEWS ///////////////

function getAll(id) {
  return db('reviews')
  .where({ snack_id: id })
}

/////////////// GET ONE REVIEW ////////////////

function getOne(sId, rId) {
  return db('reviews')
  .where({ snack_id: sId, id: rId })
  .first()
}
/////////////// CREATE REVIEW ////////////////

function create(sId, {title, text, rating, user_id}){
  return db('reviews')
  .insert({title, text, rating, snack_id: sId, user_id})
  .returning('*')
  .then(function([data]){
    return data
  })
}

/////////////// UPDATE REVIEW ////////////////

function update(sId, rId, {title, text, rating}){
  return db('reviews')
  .update({title, text, rating})
  .where({snack_id: sId, id: rId})
  .returning('*')
  .then(([data]) => {
    return data
  })
}

/////////////// REMOVE REVIEW ////////////////

function remove(sId, rId){
  return db('reviews')
  .del()
  .where({snack_id: sId, id: rId })
  .returning('*')
  .then(([data])=> {
    delete data.id
    return data
  })
}


module.exports = {getAll, getOne, create, update, remove}