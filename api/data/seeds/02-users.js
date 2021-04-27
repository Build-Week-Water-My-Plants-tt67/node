
exports.seed = async function(knex) {

      return await knex('users').insert([
          {
              username: "test",
              password: "test",
              phone: "123-456-7890"
          },
      ])
  };