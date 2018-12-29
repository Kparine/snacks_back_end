const TABLE_NAME = 'users'

exports.seeds = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      firstname:'Kevin',
      lastname:'Parine',
      email: 'test@email.com',
      password: '%23&**Granite',
    }
  ])
})
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
}