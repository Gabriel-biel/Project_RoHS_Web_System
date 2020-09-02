exports.up = function(knex) {
  return knex.schema.createTable('clients', function (table) {
    table.string('id').primary()
    table.string('password').notNullable()
    table.string('name').notNullable()
    table.string('phone').notNullable()
    table.string('email').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients')
};
