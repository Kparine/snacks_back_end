exports.up = function(knex, Promise) {
  return knex.schema.createTable('snacks', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.text('description').notNullable().defaultTo('');
    table.float('price');
    table.text('img').notNullable().defaultTo('');
    table.boolean('is_perishable').notNullable().defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snacks')
};