exports.up = async (knex) => {
  await knex.schema.createTable("events", (table) => {
    table.increments("id");
    table.string("firstName", 255).notNullable();
    table.string("lastName", 255).notNullable();
    table.string("email", 255).notNullable();
    table.datetime("eventDate", { useTz: false }).notNullable();
  });
  await knex.schema.raw(`ALTER SEQUENCE events_id_seq RESTART WITH 4`);
};

exports.down = async (knex) => {
  await knex.schema.dropTable("events");
};
