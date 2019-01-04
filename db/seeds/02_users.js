const TABLE_NAME = 'users'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([{
      id: 1,
      username: 'kevin',
      password: '1234'
    }, {
      id: 2,
      username: 'steve',
      password: '1234'
    }
  ])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
