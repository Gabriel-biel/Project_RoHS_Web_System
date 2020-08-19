exports.up = function(knex) {
  return knex.schema.createTable('providers', function (table) {
    table.string('id').primary()
    table.string('password').notNullable()

    table.string('client_id').notNullable()

    table.foreign('client_id').references('id').inTable('clients')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('providers')
};
