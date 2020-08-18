exports.up = function(knex) {
  return knex.schema.createTable('providers', function (table) {
    table.string('id').primary()
    table.string('password').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('providers')
};
