const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [ 
    {
        username: 'firstone',
        email: 'first@aol.com',
        password: '1234'
    },
    {
        username: 'secondone',
        email: 'second@aol.com',
        password: '2345'
    },
    {
        username: 'thirdone',
        email: 'third@aol.com',
        password: '3456'
    },
    {
        username: 'fourthone',
        email: 'fourth@aol.com',
        password: '4567'
    },
    {
        username: 'fifthone',
        email: 'fifth@aol.com',
        password: '5678'
    },
    {
        username: 'sixtheone',
        email: 'sixth@aol.com',
        password: '6789'
    },
    {
        username: 'seventhone',
        email: 'seventh@aol.com',
        password: '7890'
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;