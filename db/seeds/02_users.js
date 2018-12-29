const TABLE_NAME = 'users'

exports.seeds = knex => {
  return knex('users').insert([
    {
      id: 1,
      firstname:'Kevin',
      lastname:'Parine',
      email: 'test@email.com',
      password: '%23&**Granite',
    }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
}