const snacks = require('../data/snacks.json')

exports.seed = knex => {
  return knex('snacks').del()
    .then(() => {
      return knex('snacks').insert(snacks);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));`
      );
    });
};
