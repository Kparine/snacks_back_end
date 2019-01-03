
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.string('title').notNullable().defaultsTo('');
    table.text('content').notNullable().defaultsTo('');
    table.integer('rating');
    table.integer('user_id').references('users.id').notNullable();
    table.integer('snack_id').references('snacks.id').onDelete('CASCADE');
    table.timestamps(true, true)
        
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
