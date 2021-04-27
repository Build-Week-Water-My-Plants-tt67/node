
exports.seed = async function(knex) {
    return await knex('plants').insert([
      {
        nickname: "Ageratum",
        species: "Asteraceae",
        h2oFrequency: "Once a Day",
        user_id: 1
      },{
        nickname: "Blue Sage",
        species: "Lamiaceae",
        h2oFrequency: "Twice a Day",
        user_id: 1
      },{
        nickname: "Daylily",
        species: "Liliaceae",
        h2oFrequency: "Once a Day",
        user_id: 1
      },
    ])
  };