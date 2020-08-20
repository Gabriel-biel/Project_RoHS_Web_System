exports.up = function(knex) {
  return knex.schema.createTable('contacts', function (table) {
    table.increments()

    table.string('department').notNullable()
    table.string('contact_name').notNullable()
    table.string('phone').notNullable()
    table.string('email').notNullable()

    table.string('client_id').notNullable()

    table.foreign('client_id').references('id').inTable('clients')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts')
};
