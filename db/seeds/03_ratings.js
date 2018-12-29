const TABLE_NAME = 'ratings'

  exports.seeds = function(knex, Promise) {
    return knex('ratings').del()
    .then(() => {
    return knex(TABLE_NAME).insert([
      {
        id: 1,
        title: 'Salami',
        rating: 3,
        account_id: 1,
        snack_id: 3
      }
    ])
  })
    .then(()=> {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
  }