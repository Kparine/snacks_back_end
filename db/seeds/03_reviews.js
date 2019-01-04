const TABLE_NAME = 'reviews'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      title: 'Salami',
      comment: 'I love salami',
      rating: 3,
      user_id: 1,
      snack_id: 3
    }, {
      id: 2,
      title: 'Beans',
      comment: 'They\'re magical',
      rating: 5,
      user_id: 2,
      snack_id: 3
    }

  ])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
