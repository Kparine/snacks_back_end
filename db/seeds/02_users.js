const TABLE_NAME = 'users'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([{
      id: 1,
      username: 'kevin',
      password: '$2a$10$AnOQg9ORTicpTgVnYG.9qesPqHVK8G8644yd9j1FNV.eruIl9V78e' // 1234
    }, {
      id: 2,
      username: 'steve',
      password: '$2a$10$oB99a/nBT9rpT4MA5kemDehCngJMQLkPnWuut7DsAQiUPu5YbQnSy' // 1234
    }
  ])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
