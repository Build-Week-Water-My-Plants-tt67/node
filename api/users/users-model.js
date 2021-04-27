const db = require('../data/db-config');
const bcrypt = require('bcryptjs')

const getAll = () => {
    return db('users').select('user_id', 'username', 'phone');
};

const getById = (user_id) => {
    return db('users').where({ user_id }).first();
};

const getByUsername = (username) => {
    return db('users').where({ username }).first();
};

const addUser = async user => {
    const newUser = await db("users").insert(user).returning("*");
    return newUser[0];
};

const update = async user => {
    const { user_id, password } = user
    const newUser = user
    if (password) { newUser.password = bcrypt.hashSync(password, 8) }
    return await db('users').where({ user_id }).update(newUser, ['user_id', 'username', 'password', 'phone']);
};

module.exports = {
    getAll,
    getById,
    getByUsername,
    addUser,
    update
};