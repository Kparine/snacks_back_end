
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.string('title').notNullable().defaultsTo('');
    table.text('text').notNullable().defaultsTo('');
    table.integer('rating');
    table.integer('user_id').references('users.id').notNullable();
    table.integer('snack_id').references('snacks.id').onDelete('CASCADE');
    table.timestamps(true, true)
        
  })
  .then(()=>{
    return knex.schema.raw(
      `ALTER TABLE "reviews"
      ADD CONSTRAINT "reviews_unique" UNIQUE(user_id, snack_id)`
    )
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
