const { User } = require('../models');
const { bulkCreate } = require('../models/User');

const userData = [ 
    {
        username: 'firstone',
        email: 'first@aol.com',
        password: '1234'
    },
    {
        username: 'secondone',
        email: 'secondt@aol.com',
        password: '2345'
    },
    {
        username: 'thirdone',
        email: 'thirdt@aol.com',
        password: '3456'
    },
    {
        username: 'fourthhone',
        email: 'fourth@aol.com',
        password: '4567'
    },
    {
        username: 'fifthone',
        email: 'fifth@aol.com',
        password: '5678'
    },
    {
        username: 'sixthhone',
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