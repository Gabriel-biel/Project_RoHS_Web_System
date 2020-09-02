exports.up = function(knex) {
  return knex.schema.createTable('companies', function (table) {
    table.increments()

    table.string('company_name').notNullable()
    table.string('cnpj').notNullable()
    table.string('location').notNullable()
    table.string('phone').notNullable()
    table.string('email').notNullable()
    table.string('skype').notNullable()

    table.string('provider_id').notNullable()

    table.foreign('provider_id').references('id').inTable('providers')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('companies')
};
