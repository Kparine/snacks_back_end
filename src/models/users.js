const db = require('../../db')
const bcrypt = require('bcrypt')


function getOneByUserName(username) {
  return (
    db('users')
    .where({ username })
    .first()
  )
}

function create(username, password) {
  return getOneByUserName(username)
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

module.exports = { getOneByUserName, create }