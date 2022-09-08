const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'jolo',
    email: 'jolo@email.com',
    password: 'password123'
  },
  {
    username: 'julcab',
    email: 'julcab@email.com',
    password: 'password123'
  },
  {
    username: 'melb',
    email: 'mbat@gmail.com',
    password: 'password123'
  },
  {
    username: 'holycow',
    email: 'overthemoon@yahoo.com',
    password: 'password123'
  },
  {
    username: 'hellothere',
    email: 'hello@weather.com',
    password: 'password123'
  },
  {
    username: 'broccoli',
    email: 'veggies@aol.com',
    password: 'password123'
  },
  {
    username: 'bighero6',
    email: 'tedashii@hotmail.com',
    password: 'password123'
  },
  {
    username: 'naruto',
    email: 'uzumaki@gmail.com',
    password: 'password123'
  },
  {
    username: 'thelastuchiha',
    email: 'sasuke@email.com',
    password: 'password123'
  },
  {
    username: 'johigh',
    email: 'johigh@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
