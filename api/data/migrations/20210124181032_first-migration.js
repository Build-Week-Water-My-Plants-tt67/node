exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 128).notNullable().unique()
      users.string('password', 128).notNullable()
      users.string('phone', 128).notNullable()
      // users.timestamps(false, true)
    })
    .createTable('plants', (plants) => {
      plants.increments('plant_id')
      plants.string('nickname', 128).notNullable()
      plants.string('species', 128).notNullable()
      plants.string('h2oFrequency', 128).notNullable()
      plants.string("image", 500)
      plants.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
}