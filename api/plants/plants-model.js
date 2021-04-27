const db = require('../data/db-config');

const getAll = () => {
    return db('plants');    
};

const getById = (plant_id) => {
    return db('plants').where({ plant_id }).first();
};

const getUserPlants = (user_id) => {
    return db('plants').where({ user_id }); 
};

const addPlant = plant => {
    return db('plants').insert(plant, ['nickname', 'h2oFrequency', 'species','image', 'plant_id', 'user_id']);
};

const update = plant => {
    const { plant_id } = plant
    return db('plants').where({ plant_id }).update(plant, ['nickname', 'h2oFrequency', 'image', 'species','plant_id', 'user_id']);
};

const remove = plant_id => {
    return db('plants').where({ plant_id }).del();
};

module.exports = {
    getAll,
    getById,
    getUserPlants,
    addPlant,
    update,
    remove
}