const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [ 
    {
        username: 'firstone',
        password: '1234'
    },
    {
        username: 'secondone',
        password: '2345'
    },
    {
        username: 'thirdone',
        password: '3456'
    },
    {
        username: 'fourthone',
        password: '4567'
    },
    {
        username: 'fifthone',
        password: '5678'
    },
    {
        username: 'sixtheone',
        password: '6789'
    },
    {
        username: 'seventhone',
        password: '7890'
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;