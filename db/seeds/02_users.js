const TABLE_NAME = 'users'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([{
      id: 1,
      username: 'kparine',
      password: '8776gghdgfdgfd'
    }])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
