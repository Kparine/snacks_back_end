
exports.seed = knex => {
  return knex('snacks').del()
  .then(() => knex('users').del())
  .then(() => knex('reviews').del())
}
