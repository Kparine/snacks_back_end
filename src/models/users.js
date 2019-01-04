const db = require('../../db/knex.js')
const bcrypt = require('bcrypt')


function getUser(username) {
  return (
    db('users')
    .where({ username })
    .first()
  )
}

function create(username, password) {
  console.log(username);
  
  return getUser(username)
  .then(function(data) {
    if(data) throw { status: 400, message: 'Username Already Exists' }

    return bcrypt.hash(password, 10)
  })
  .then(function(hashedpassword) {
    return (
      db('users')
      .insert({username, password: hashedpassword })
      .returning('*')
    )
  })
  .then(function([data]) {
    delete data.password
    return data
  })
}

module.exports = { getUser, create }