const db = require('../../db/knex')


/////////////// GET ALL REVIEWS ///////////////

function getAll(id) {
  return db('reviews')
  .where({ snack_id: id })
}

/////////////// GET ONE REVIEW ////////////////

function getOne( id, rId ) {  
return db('reviews')
.where({ snack_id: id, id: rId })
.first()
}

/////////////// CREATE REVIEW ////////////////

function create(title, rating, comment, user_id, snack_id) {
  return (
    db('reviews')
      .insert({ title, rating, comment, user_id, snack_id })
      .returning('*')
      .then(([data]) => {
        return data
      })
  )
}

/////////////// UPDATE REVIEW ////////////////

function update(title, rating, comment, snack_id, id) {
  return (
    db('reviews')
      .update({ title, rating, comment })
      .where({ snack_id, id })
      .returning('*')
      .then(([data]) => {
        return data
    })
  )
}

/////////////// REMOVE REVIEW ////////////////

function remove(snack_id, id) {
  return (
    db('reviews')
      .del()
      .where({ snack_id, id })
      .returning('*')
      .then(([data]) => {
        delete data.id
        return data
      })
  )
}

module.exports = { getAll, getOne, create, update, remove }